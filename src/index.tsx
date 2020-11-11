import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StylesProvider } from '@material-ui/styles';

import App from './App';
import store from './redux/store';

import GlobalStyle from './styles/globalStyles';
import Theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <BrowserRouter>
          <StylesProvider injectFirst>
            <ThemeProvider theme={Theme}>
              <GlobalStyle />
              <App />
            </ThemeProvider>
          </StylesProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
