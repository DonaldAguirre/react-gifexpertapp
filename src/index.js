import React from 'react';
import ReactDOMClient from 'react-dom/client'
import GifExpertApp from './GifExpertApp';

import './index.css';

const divRoot = document.querySelector('#root');

const root = ReactDOMClient.createRoot(divRoot);

root.render( 
    <React.StrictMode> 
        <GifExpertApp />
    </React.StrictMode>
);
