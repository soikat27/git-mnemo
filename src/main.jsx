import "./styles/normalize.css";
import "./styles/tokens.css";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';

/**
 * Application entry. Mounts App into #root.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
