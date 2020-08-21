import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyles />
    <BrowserRouter />
  </>
);

export default App;
