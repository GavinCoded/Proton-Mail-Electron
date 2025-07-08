const { app, BrowserWindow } = require('electron')
const path = require('path')

function createwindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: 'proton mail',
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      contextIsolation: true
    }
  })

  win.loadURL('https://mail.proton.me/u/0/inbox')
}

app.whenReady().then(() => {
  createwindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createwindow()
  }
})

