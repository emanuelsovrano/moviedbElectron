const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win 

function createWindwo() {
    //create a window object
    win = new BrowserWindow({width: 800, height: 600})
    
    //load window object
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
}

