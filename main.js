const { app, BrowserWindow, screen } = require("electron");

let mainWindow;

app.whenReady().then(() => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize; // Get screen size

  mainWindow = new BrowserWindow({
    width: 1920, // Full HD resolution for 14-inch laptop
    height: 1080,
    center: true, // Automatically center the window
    frame: false, // No default window frame
    transparent: true, // Transparent background
    // alwaysOnTop: true, // Always on top
    resizable: false, // Disable resizing
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  
  

  mainWindow.loadFile("index.html");
});

// Close the app when all windows are closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});


