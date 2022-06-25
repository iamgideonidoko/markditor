import React from 'react';
import MainLayout from './components/MainLayout';
import Titlebar from './components/Titlebar';
import './index.scss';

function App() {
    return (
        <>
            <Titlebar />
            <MainLayout />
        </>
    );
}

export default App;
