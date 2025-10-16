/**
 * Google Apps Script: Mobile GPS Logger (v2)
 * Deploy as a Web App. When opened on a phone, the page requests GPS permission
 * and logs the coordinates into the "Lfile" located in the chatgpt Google Drive folder.
 *
 * Folder ID: 1dVrvGaIwFAaM4qdWxk_DLeKnYbIJjxxd
 */

const CHATGPT_FOLDER_ID = '1dVrvGaIwFAaM4qdWxk_DLeKnYbIJjxxd';
const LOG_FILE_NAME = 'Lfile';
const HKT_TIMEZONE = 'Asia/Hong_Kong'; // GMT+8
const SCRIPT_PROP_FILE_ID = 'gpsLogger.logFileId';

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

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('No POST payload supplied');
    }

    const payload = JSON.parse(e.postData.contents);
    const latitude = toNumber(payload.latitude, 'latitude');
    const longitude = toNumber(payload.longitude, 'longitude');

    const result = writeLocationEntry({
      latitude,
      longitude,
      accuracy: payload.accuracy !== undefined ? toOptionalNumber(payload.accuracy) : null,
      deviceInfo: payload.deviceInfo || payload.device || '',
      source: payload.source || 'mobile-post'
    });

    return createJsonResponse({ success: true, entry: result.entry, fileId: result.fileId });
  } catch (error) {
    return createJsonResponse({ success: false, message: error.message });
  }
}

function handleApiLog(params) {
  try {
    const latitude = toNumber(params.lat || params.latitude, 'latitude');
    const longitude = toNumber(params.lng || params.lon || params.longitude, 'longitude');
    const accuracy = params.acc || params.accuracy ? toOptionalNumber(params.acc || params.accuracy) : null;
    const deviceInfo = params.device || params.deviceInfo || '';

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

  const latitude = toNumber(payload.latitude, 'latitude');
  const longitude = toNumber(payload.longitude, 'longitude');

  const result = writeLocationEntry({
    latitude,
    longitude,
    accuracy: payload.accuracy !== undefined ? toOptionalNumber(payload.accuracy) : null,
    deviceInfo: payload.deviceInfo || '',
    source: payload.source || 'mobile-webapp'
  });

  return { success: true, entry: result.entry, fileId: result.fileId };
}

function writeLocationEntry(data) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const file = getOrCreateLogFile();

    const timestamp = Utilities.formatDate(new Date(), HKT_TIMEZONE, "yyyy-MM-dd HH:mm:ss 'GMT+8'");
    const cleanAccuracy = data.accuracy !== null && !Number.isNaN(data.accuracy) ? data.accuracy : '';
    const sanitizedDevice = sanitizeText(data.deviceInfo || '');
    const source = sanitizeText(data.source || '');

    const entry = [timestamp, data.latitude, data.longitude, cleanAccuracy, sanitizedDevice, source]
      .map(value => value !== undefined && value !== null ? value : '')
      .join(',');

    const existingContent = file.getBlob().getDataAsString();
    file.setContent(existingContent + entry + '\n');

    return { entry, fileId: file.getId() };
  } finally {
    lock.releaseLock();
  }
}

function getOrCreateLogFile() {
  const props = PropertiesService.getScriptProperties();
  const cachedId = props.getProperty(SCRIPT_PROP_FILE_ID);

  if (cachedId) {
    try {
      return DriveApp.getFileById(cachedId);
    } catch (error) {
      // If file was deleted or ID invalid, fall through to recreate lookup
    }
  }

  const folder = DriveApp.getFolderById(CHATGPT_FOLDER_ID);
  let file;
  const existing = folder.getFilesByName(LOG_FILE_NAME);
  if (existing.hasNext()) {
    file = existing.next();
  } else {
    file = folder.createFile(LOG_FILE_NAME, 'timestamp,latitude,longitude,accuracy,device,source\n');
  }

  props.setProperty(SCRIPT_PROP_FILE_ID, file.getId());
  return file;
}

function sanitizeText(value) {
  return String(value).replace(/[\r\n]+/g, ' ').trim();
}

function toNumber(value, label) {
  const num = Number(value);
  if (Number.isNaN(num)) {
    throw new Error('Missing or invalid ' + label);
  }
  return num;
}

function toOptionalNumber(value) {
  const num = Number(value);
  return Number.isNaN(num) ? null : num;
}

function createJsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
