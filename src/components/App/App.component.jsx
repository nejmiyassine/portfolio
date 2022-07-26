import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../../Hooks/useDarkMode';
import GlobalStyle from '../GlobalStyle/GlobalStyle.style';
import Header from '../Header/Header.component';
import { lightTheme, darkTheme } from '../../styles/theme/theme';
import Home from '../Home/Home.component';
import About from '../About/About.component';
import Skills from '../Skills/Skills.component';
import Works from '../Works/Works.component';
import Contact from '../Contact/Contact.component';
import Footer from '../Footer/Footer.component';

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <>
        <Header themeToggler={themeToggler} theme={theme} />
        <Home />
        <About />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
