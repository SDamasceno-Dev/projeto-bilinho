/**
 * @file: App
 * @info: Main Component of App
 */

// Dependencies import
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Utils and context imports
import { AuthProvider } from './hooks/AuthContext';

// Styles import
import GlobalStyle from './styles/global';

// Routes import
import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AuthProvider>
      <Routes />
    </AuthProvider>

    <GlobalStyle />
  </Router>
);

export default App;
