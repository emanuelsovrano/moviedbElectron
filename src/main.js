const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    //create a window object
    win = new BrowserWindow({width: 800, height: 600});

    win.webContents.openDevTools();    
    
    //load window object
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
}

app.on('ready', createWindow);