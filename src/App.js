import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Terminal from './terminal-page/terminal';
import Home from './components/static/home';
import './App.css';
import './terminal-page/terminal.css';

export default function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route
              path="/"
              element={<Home key="home" />}
            />
            <Route
              path="/terminal"
              element={<Terminal />}
            />
          </Routes>
      </div>
    </Router>
  );
}
