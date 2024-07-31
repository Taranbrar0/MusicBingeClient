import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { SongProvider } from './Context/SongContext';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SongProvider>
    <StrictMode>
       <App />
      </StrictMode>
  </SongProvider>
  </BrowserRouter>
)

