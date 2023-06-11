import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './slices/index.js';
import App from './App.jsx';
import I18NextProvider from './contexts/I18NextProvider.jsx';
import CallsApiProvider from './contexts/CallsApiProvider.jsx';
import './styles/index.css';

const init = () => (
  <Provider store={store}>
    <CallsApiProvider>
      <I18NextProvider>
        <App />
      </I18NextProvider>
    </CallsApiProvider>
  </Provider>
);

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);

const virtualDom = init();

root.render(virtualDom);

