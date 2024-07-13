import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import './index.css';

// Use ReactDOM.createRoot for Concurrent Mode or newer React versions

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>);
