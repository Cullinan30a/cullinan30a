// Updated Google Apps Script for ABC Drive Viewer
// This script should replace your current Apps Script code
// App Script ID: 1lcO17egk_Jd7o9Al94MtO8UAUzzO49lYUdAJzAdRUCxN7dQ9OGgOm1nj

function doGet(e) {
  try {
    // Log the request for debugging
    console.log('Received request:', e);
    console.log('Parameters:', e.parameter);
    
    const folderName = e.parameter.folder;
    const folderId = e.parameter.folderId || '1dVrvGaIwFAaM4qdWxk_DLeKnYbIJjxxd'; // Default to chatgpt folder ID
    const callback = e.parameter.callback; // For JSONP support
    
    console.log('Looking for folder ID:', folderId);
    
    let folder;
    
    if (folderId) {
      // Use folder ID (more reliable)
      try {
        folder = DriveApp.getFolderById(folderId);
        console.log('Found folder by ID:', folder.getName());
      } catch (idError) {
        const errorResponse = {
          error: `Folder with ID "${folderId}" not found or not accessible. Error: ${idError.toString()}`,
          success: false
        };
        return createResponse(errorResponse, callback);
      }
    } else if (folderName) {
      // Fallback to folder name search
      const folders = DriveApp.getFoldersByName(folderName);
      
      if (!folders.hasNext()) {
        const errorResponse = {
          error: `Folder "${folderName}" not found. Available folders: ${getAvailableFolders().join(', ')}`,
          success: false
        };
        return createResponse(errorResponse, callback);
      }
      
      folder = folders.next();
      console.log('Found folder by name:', folder.getName());
    } else {
      const errorResponse = {
        error: 'No folder name or ID specified. Please provide either "folder" or "folderId" parameter.',
        success: false
      };
      return createResponse(errorResponse, callback);
    }
    
    // Get all files and folders in the directory
    const files = [];
    
    // Get files
    const fileIterator = folder.getFiles();
    while (fileIterator.hasNext()) {
      const file = fileIterator.next();
      files.push({
        id: file.getId(),
        name: file.getName(),
        size: file.getSize(),
        mimeType: file.getBlob().getContentType(),
        modifiedTime: file.getLastUpdated().toISOString(),
        webViewLink: file.getUrl(),
        webContentLink: `https://drive.google.com/uc?id=${file.getId()}&export=download`,
        type: 'file'
      });
    }
    
    // Get subfolders
    const folderIterator = folder.getFolders();
    while (folderIterator.hasNext()) {
      const subfolder = folderIterator.next();
      files.push({
        id: subfolder.getId(),
        name: subfolder.getName(),
        size: null,
        mimeType: 'application/vnd.google-apps.folder',
        modifiedTime: subfolder.getLastUpdated().toISOString(),
        webViewLink: subfolder.getUrl(),
        webContentLink: null,
        type: 'folder'
      });
    }
    
    console.log(`Found ${files.length} items`);
    
    const response = {
      success: true,
      folder: folder.getName(),
      folderId: folder.getId(),
      files: files,
      count: files.length
    };
    
    return createResponse(response, callback);
    
  } catch (error) {
    console.error('Error in doGet:', error);
    const errorResponse = {
      error: error.toString(),
      success: false
    };
    
    return createResponse(errorResponse, e.parameter.callback);
  }
}

// Helper function to get list of available folders (for debugging)
function getAvailableFolders() {
  try {
    const folders = [];
    const folderIterator = DriveApp.getRootFolder().getFolders();
    let count = 0;
    while (folderIterator.hasNext() && count < 10) { // Limit to first 10 folders
      folders.push(folderIterator.next().getName());
      count++;
    }
    return folders;
  } catch (e) {
    return ['Error getting folder list'];
  }
}

// Create response with proper CORS headers and JSONP support
function createResponse(data, callback) {
  const json = JSON.stringify(data);
  
  if (callback) {
    // JSONP response
    return ContentService
      .createTextOutput(`${callback}(${json})`)
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  } else {
    // Regular JSON response with CORS headers
    return ContentService
      .createTextOutput(json)
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      });
  }
}

// Handle OPTIONS requests for CORS preflight
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
}
