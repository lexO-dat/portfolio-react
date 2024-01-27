import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar({ onTerminalClick }) {
    return (
      <nav class="navbar navbar-expand-lg bg-black">
        <div class="container-fluid">
          <svg
            class="navbar-brand"
            viewBox="0 0 94 164"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.04 128V27.2H8.82V124.724H48.762V128H5.04ZM12.6 121.448V27.2H16.38V118.172H48.762V121.448H12.6ZM20.16 114.896V27.2H23.94V111.62H48.762V114.896H20.16Z"
              fill="white"
            />
          </svg>

          <Link to="/terminal">
          <svg
              class="navbar-text"
              viewBox="0 0 60 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill="white" />
              <circle cx="30" cy="5" r="5" fill="white" />
              <circle cx="55" cy="5" r="5" fill="white" />
              <circle cx="55" cy="31" r="5" fill="white" />
              <circle cx="55" cy="54" r="5" fill="white" />
              <circle cx="30" cy="54" r="5" fill="white" />
              <circle cx="5" cy="54" r="5" fill="white" />
              <circle cx="5" cy="30" r="5" fill="white" />
              <circle cx="30" cy="31" r="5" fill="white" />
            </svg>
          </Link>
        </div>
      </nav>
    );
}