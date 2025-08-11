/***** ENHANCED ABC DRIVE MANAGER *****/
/***** CONFIG *****/
const MAX_BACKUPS = 5; // 保留備份數量上限

/***** Entry Point *****/
function doGet(e) {
  try {
    if (!e || typeof e !== 'object') {
      return createJsonResponse({ success: false, message: '❌ 無效請求' });
    }

    // 讀取 PASSCODE（在「Script properties」設定 WEBHOOK_PASSCODE）
    const PASSCODE = PropertiesService.getScriptProperties().getProperty('WEBHOOK_PASSCODE');
    if (!PASSCODE) throw new Error('未設定 WEBHOOK_PASSCODE，請在「腳本屬性」加入');

    if (!e.parameter.passcode || e.parameter.passcode !== PASSCODE) {
      return createJsonResponse({ success: false, message: '❌ 未授權' });
    }

    const action = (e.parameter.action || '').toLowerCase();
    switch (action) {
      case 'list':
        return handleList(e);
      case 'update':
        return handleUpdate(e);
      case 'backup':
        return handleBackup(e);
      case 'move':
        return handleMove(e);
      case 'delete':
        return handleDelete(e);
      case 'ping':
        return createJsonResponse({ success: true, message: 'pong', time: new Date().toISOString() });
      default:
        return createJsonResponse({ success: false, message: '❌ 未知 action' });
    }
  } catch (err) {
    return createJsonResponse({ success: false, message: '❌ 伺服器錯誤：' + err.message });
  }
}

/***** Handlers *****/
// 列出指定資料夾檔案：?action=list&folderId=xxx
function handleList(e) {
  const folderId = e.parameter.folderId;
  if (!folderId) return createJsonResponse({ success: false, message: '缺少 folderId' });

  const folder = DriveApp.getFolderById(folderId);
  const files = folder.getFiles();

  const items = [];
  while (files.hasNext()) {
    const f = files.next();
    items.push({
      id: f.getId(),
      name: f.getName(),
      mimeType: f.getMimeType(),
      url: 'https://drive.google.com/file/d/' + f.getId() + '/view',
      createdTime: f.getDateCreated(),
      updatedTime: f.getLastUpdated(),
      size: (f.getSize && f.getSize()) || null
    });
  }
  return createJsonResponse({ success: true, count: items.length, files: items });
}

// 重新命名檔案：?action=update&fileId=xxx&newName=abc.txt
function handleUpdate(e) {
  const fileId = e.parameter.fileId;
  const newName = e.parameter.newName;
  if (!fileId || !newName) {
    return createJsonResponse({ success: false, message: '缺少 fileId 或 newName' });
  }
  const file = DriveApp.getFileById(fileId);
  file.setName(newName);
  return createJsonResponse({ success: true, message: '✅ 已重新命名', id: fileId, name: newName });
}

// 建立備份副本（並維持上限）：?action=backup&fileId=xxx
function handleBackup(e) {
  const fileId = e.parameter.fileId;
  if (!fileId) return createJsonResponse({ success: false, message: '缺少 fileId' });

  const file = DriveApp.getFileById(fileId);
  const parent = file.getParents().hasNext() ? file.getParents().next() : null;
  const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyyMMdd-HHmmss");
  const backupName = `[bak-${timestamp}] ${file.getName()}`;
  const copy = file.makeCopy(backupName, parent || DriveApp.getRootFolder());

  // 清理備份（依名稱前綴）
  if (parent) {
    const iter = parent.getFiles();
    const backups = [];
    while (iter.hasNext()) {
      const f = iter.next();
      if (f.getName().startsWith('[bak-')) backups.push(f);
    }
    backups.sort((a, b) => b.getDateCreated() - a.getDateCreated());
    for (let i = MAX_BACKUPS; i < backups.length; i++) {
      backups[i].setTrashed(true);
    }
  }

  return createJsonResponse({ success: true, message: '✅ 已建立備份', backupId: copy.getId(), backupName });
}

// 移動檔案到指定資料夾：?action=move&fileId=xxx&targetFolderId=yyy
function handleMove(e) {
  const fileId = e.parameter.fileId;
  const targetFolderId = e.parameter.targetFolderId;
  if (!fileId || !targetFolderId) {
    return createJsonResponse({ success: false, message: '缺少 fileId 或 targetFolderId' });
  }
  const file = DriveApp.getFileById(fileId);
  const target = DriveApp.getFolderById(targetFolderId);

  // 先記住原父層，完成後把舊父層移除（達到真正移動）
  const parents = [];
  const it = file.getParents();
  while (it.hasNext()) parents.push(it.next());

  target.addFile(file);
  parents.forEach(p => p.removeFile(file));

  return createJsonResponse({ success: true, message: '✅ 已移動檔案', id: fileId, to: targetFolderId });
}

// 刪除（移到垃圾桶）：?action=delete&fileId=xxx
function handleDelete(e) {
  const fileId = e.parameter.fileId;
  if (!fileId) return createJsonResponse({ success: false, message: '缺少 fileId' });
  const file = DriveApp.getFileById(fileId);
  file.setTrashed(true);
  return createJsonResponse({ success: true, message: '🗑️ 已移到垃圾桶', id: fileId });
}

/***** Helpers *****/
function createJsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
