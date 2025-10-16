/**
 * Google Apps Script: Mobile GPS Logger
 * Deploy as a Web App. When opened on a phone, the page requests GPS permission
 * and logs the coordinates into the "Lfile" located in the chatgpt Google Drive folder.
 *
 * Folder ID: 1dVrvGaIwFAaM4qdWxk_DLeKnYbIJjxxd
 */

const CHATGPT_FOLDER_ID = '1dVrvGaIwFAaM4qdWxk_DLeKnYbIJjxxd';
const LOG_FILE_NAME = 'Lfile';
const HKT_TIMEZONE = 'Asia/Hong_Kong'; // GMT+8

function doGet(e) {
  if (e && e.parameter && (e.parameter.mode || e.parameter.action)) {
    const mode = (e.parameter.mode || e.parameter.action || '').toLowerCase();
    if (mode === 'log' || mode === 'capture') {
      return handleApiLog(e.parameter);
    }
  }

  const template = HtmlService.createTemplateFromFile('gpsLogger');
  template.generatedAt = Utilities.formatDate(new Date(), HKT_TIMEZONE, 'yyyy-MM-dd HH:mm:ss');

  return template
    .evaluate()
    .setTitle('GPS Logger | chatgpt Folder')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function handleApiLog(params) {
  try {
    const latitude = parseFloat(params.lat || params.latitude);
    const longitude = parseFloat(params.lng || params.lon || params.longitude);
    const accuracy = params.acc || params.accuracy ? Number(params.acc || params.accuracy) : null;
    const deviceInfo = params.device || params.deviceInfo || '';

    if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
      throw new Error('Missing latitude/longitude');
    }

    const result = writeLocationEntry({
      latitude,
      longitude,
      accuracy,
      deviceInfo,
      source: 'api-request'
    });

    return createJsonResponse({ success: true, entry: result.entry, message: 'Location stored in Lfile.' });
  } catch (error) {
    return createJsonResponse({ success: false, message: error.message });
  }
}

function logLocationFromClient(payload) {
  if (!payload) {
    throw new Error('No payload supplied');
  }

  const result = writeLocationEntry({
    latitude: Number(payload.latitude),
    longitude: Number(payload.longitude),
    accuracy: payload.accuracy !== undefined ? Number(payload.accuracy) : null,
    deviceInfo: payload.deviceInfo || '',
    source: payload.source || 'mobile-webapp'
  });

  return { success: true, entry: result.entry };
}

function writeLocationEntry(data) {
  if (Number.isNaN(data.latitude) || Number.isNaN(data.longitude)) {
    throw new Error('Invalid GPS coordinates');
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const folder = DriveApp.getFolderById(CHATGPT_FOLDER_ID);
    let file;
    const existing = folder.getFilesByName(LOG_FILE_NAME);
    if (existing.hasNext()) {
      file = existing.next();
    } else {
      file = folder.createFile(LOG_FILE_NAME, 'timestamp,latitude,longitude,accuracy,device,source\n');
    }

    const timestamp = Utilities.formatDate(new Date(), HKT_TIMEZONE, "yyyy-MM-dd HH:mm:ss 'GMT+8'");
    const cleanAccuracy = data.accuracy !== null && !Number.isNaN(data.accuracy) ? data.accuracy : '';
    const sanitizedDevice = (data.deviceInfo || '').replace(/[\r\n]+/g, ' ').trim();
    const source = (data.source || '').replace(/[\r\n]+/g, ' ').trim();

    const entry = `${timestamp},${data.latitude},${data.longitude},${cleanAccuracy},${sanitizedDevice},${source}\n`;
    const content = file.getBlob().getDataAsString() + entry;
    file.setContent(content);

    return { entry, fileId: file.getId() };
  } finally {
    lock.releaseLock();
  }
}

function createJsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
