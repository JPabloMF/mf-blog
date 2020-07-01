import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';

import SideBar from '../components/sidebar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Hello world!</h1>
        <SideBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
