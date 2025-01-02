// const { app, BrowserWindow, screen } = require("electron");

// let mainWindow;

// app.whenReady().then(() => {
//   const { width, height } = screen.getPrimaryDisplay().workAreaSize; // Get screen size

//   mainWindow = new BrowserWindow({
//     width: 1920, // Full HD resolution for 14-inch laptop
//     height: 1080,
//     center: true, // Automatically center the window
//     frame: false, // No default window frame
//     transparent: true, // Transparent background
//     // alwaysOnTop: true, // Always on top
//     resizable: false, // Disable resizing
//     webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false,
//     },
//   });
  
  

//   mainWindow.loadFile("index.html");
// });

// // Close the app when all windows are closed
// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });


const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  
  mainWindow = new BrowserWindow({
    width: 350,  // Default width for the widget
    height: 400, // Default height for the widget
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    skipTaskbar: true, // Hide from taskbar
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('index.html');
  
  // Handle window dragging out of screen bounds
  mainWindow.on('move', () => {
    const bounds = mainWindow.getBounds();
    const display = screen.getPrimaryDisplay();
    const { width: screenWidth, height: screenHeight } = display.workAreaSize;

    // Keep window within screen bounds
    if (bounds.x < 0) mainWindow.setPosition(0, bounds.y);
    if (bounds.y < 0) mainWindow.setPosition(bounds.x, 0);
    if (bounds.x + bounds.width > screenWidth) {
      mainWindow.setPosition(screenWidth - bounds.width, bounds.y);
    }
    if (bounds.y + bounds.height > screenHeight) {
      mainWindow.setPosition(bounds.x, screenHeight - bounds.height);
    }
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});


