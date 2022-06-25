/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react';
import '../styles/WinTitlebar.scss';

function WinTitlebar() {
    return (
        <div
            className="titlebar cet-windows light"
            style={{ backgroundColor: 'rgb(236, 236, 236)', color: 'rgb(51, 51, 51)', height: '30px' }}
        >
            <div className="titlebar-drag-region" />
            <div className="menubar" role="menubar">
                <div
                    className="menubar-menu-button"
                    role="menuitem"
                    tabIndex={-1}
                    aria-label="File"
                    aria-haspopup="true"
                >
                    <div className="menubar-menu-title" role="none" aria-hidden="true">
                        File
                    </div>
                </div>
                <div
                    className="menubar-menu-button"
                    role="menuitem"
                    tabIndex={-1}
                    aria-label="Edit"
                    aria-haspopup="true"
                >
                    <div className="menubar-menu-title" role="none" aria-hidden="true">
                        Edit
                    </div>
                </div>
                <div
                    className="menubar-menu-button"
                    role="menuitem"
                    tabIndex={-1}
                    aria-label="View"
                    aria-haspopup="true"
                >
                    <div className="menubar-menu-title" role="none" aria-hidden="true">
                        View
                    </div>
                </div>
                <div
                    className="menubar-menu-button"
                    role="menuitem"
                    tabIndex={-1}
                    aria-label="Window"
                    aria-haspopup="true"
                >
                    <div className="menubar-menu-title" role="none" aria-hidden="true">
                        Window
                    </div>
                </div>
                <div
                    className="menubar-menu-button"
                    role="menuitem"
                    tabIndex={-1}
                    aria-label="Help"
                    aria-haspopup="true"
                >
                    <div className="menubar-menu-title" role="none" aria-hidden="true">
                        Help
                    </div>
                </div>
            </div>
            <div className="window-title" style={{ cursor: 'default', marginRight: 'auto', marginLeft: 'auto' }}>
                Markditor
            </div>
            <div className="window-controls-container">
                <div className="window-icon-bg">
                    <div className="window-icon window-minimize" />
                </div>
                <div className="window-icon-bg">
                    <div className="window-icon window-max-restore window-unmaximize" />
                </div>
                <div className="window-icon-bg window-close-bg">
                    <div className="window-icon window-close" />
                </div>
            </div>
            <div className="resizer top" aria-hidden="true" style={{ display: 'none' }} />
            <div className="resizer left" aria-hidden="true" style={{ display: 'none' }} />
        </div>
    );
}

export default WinTitlebar;
