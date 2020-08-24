import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyles />
    <BrowserRouter />
  </>
);

export default App;
