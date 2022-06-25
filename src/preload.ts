import { Titlebar, Color } from '@treverix/custom-electron-titlebar';

window.addEventListener('DOMContentLoaded', () => {
    // eslint-disable-next-line no-new
    new Titlebar({
        backgroundColor: Color.fromHex('#ECECEC'),
    });
});
