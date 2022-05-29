/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useRef, useState, MouseEvent } from 'react';
import '../styles/MainLayout.scss';
import EditorBox from './EditorBox';

function MainLayout() {
    const [isDragging, setIsDragging] = useState(false);
    const wrapper = useRef();
    const aside = useRef();
    const mainSection = useRef();

    const startDrag = () => {
        setIsDragging(true);
    };

    const endDrag = () => {
        setIsDragging(false);
    };

    const handleDrag = (event: MouseEvent<HTMLDivElement>) => {
        if (isDragging && wrapper.current) {
            const leftColWidth = event.clientX;

            const dragbarWidth = 6;

            (wrapper.current as HTMLDivElement).style.gridTemplateColumns = `${leftColWidth}px ${dragbarWidth}px auto`;

            event.preventDefault();
        }
    };

    return (
        <div role="grid" onMouseMove={handleDrag} onMouseUp={endDrag} ref={wrapper} className="main-layout-wrapper">
            <aside ref={aside}>Navbar</aside>
            <div role="grid" className="drag-area" onMouseDown={startDrag} />
            <div className="main-section" ref={mainSection}>
                <EditorBox />
            </div>
        </div>
    );
}

export default MainLayout;
