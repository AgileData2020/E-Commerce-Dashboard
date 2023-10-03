import React from 'react';
import ReactDOM from 'react-dom/client';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './index.css';
import App from './App';
import store from './redux/store/store';
import { Provider } from 'react-redux'

import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import 'rsuite/dist/rsuite-no-reset.min.css';

let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>

        <HashRouter>

          <App />

        </HashRouter>

      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
