import Home from './pages/Home/Home';

import { GlobalStyle } from './styles/global';
import ThemeContextProvider from './context/ThemeContext';
import Header from './components/Header';

const App = () => (
  <ThemeContextProvider>
    <div className="App">
      <Header />

      <GlobalStyle />
      {/* I only have one page so I rather to not create a routes file */}
      <Home />
    </div>
  </ThemeContextProvider>
);

export default App;
