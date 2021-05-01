/**
 * @file: App
 * @info: Main Component of App
 */

// Dependencies import
import React from 'react';

// Some import
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

// Utils and context imports
import { AuthProvider } from './context/AuthContext';

// Styles import
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
