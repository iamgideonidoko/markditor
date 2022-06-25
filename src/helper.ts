export const handleAppMinimize = () => {
    const { minimizeApp } = window.electronAPI;
    if (minimizeApp) minimizeApp();
};

export const handleAppMaximize = () => {
    const { maximizeApp } = window.electronAPI;
    if (maximizeApp) maximizeApp();
};

export const handleAppClose = () => {
    const { closeApp } = window.electronAPI;
    if (closeApp) closeApp();
};
