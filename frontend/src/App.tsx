/**
 * @file: App
 * @info: Main Component of App
 */

// Dependencies import
import React from 'react';

// Some import
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

// Styles import
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
