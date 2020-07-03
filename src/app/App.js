import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from '../utils/theme';

import Main from '../screens/main';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #efefef;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Main />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
