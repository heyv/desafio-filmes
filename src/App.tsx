import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <BrowserRouter>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
