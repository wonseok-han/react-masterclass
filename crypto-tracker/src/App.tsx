import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { HelmetProvider } from 'react-helmet-async';
import { ReactQueryDevtools } from 'react-query/devtools';
import Router from 'routes/Router';
import Switch from 'react-switch';
import { darkTheme } from 'styles/global';
import { lightTheme } from './styles/global';
import { reset } from 'styles/global';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    line-height: 1;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const SwitchWrapper = styled.div`
  position: fixed;
  left: 100%;
  transform: translate(-100%);
  width: 150px;
  padding-top: 20px;
`;

const SwitchLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <>
      <SwitchWrapper>
        <SwitchLabel>
          <span>다크모드</span>
          <Switch
            onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            checked={theme === 'dark' ? true : false}
          />
        </SwitchLabel>
      </SwitchWrapper>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <HelmetProvider>
          <Router />
        </HelmetProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
