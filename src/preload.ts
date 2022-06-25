import { contextBridge, ipcRenderer } from 'electron';

window.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line no-new
    console.log('APP LOADED');
});

contextBridge.exposeInMainWorld('electronAPI', {
    minimizeApp: () => ipcRenderer.send('minimize-app'),
    maximizeApp: () => ipcRenderer.send('maximize-app'),
    closeApp: () => ipcRenderer.send('minimize-app'),
});
