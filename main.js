const {app, BrowserWindow} = require('electron')


const createWindow = () => {
    const win = new BrowserWindow({
        height: 500,
        width: 800,
        webPreferences : {
          nodeIntegration: true,
          contextIsolation: false,
        }
    });

    win.loadFile('index.html')
    //win.loadURL('https://www.electronjs.org/docs/latest/tutorial/quick-start')
};



app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  })
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  