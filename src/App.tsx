import Home from './pages/Home/Home';

import { GlobalStyle } from './styles/global';
import ThemeContextProvider from './context/ThemeContext';
import Header from './components/Header';
import ApplicationContextProvider from './context/ApplicationContext';

const App = () => (
  <ThemeContextProvider>
    <ApplicationContextProvider>
      <div className="App">
        <Header />

        <GlobalStyle />
        {/* I only have one page so I rather to not create a routes file */}
        <Home />
      </div>
    </ApplicationContextProvider>
  </ThemeContextProvider>
);

export default App;
