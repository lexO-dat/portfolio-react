import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
    <App />
);