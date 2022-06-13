import { darkTheme, lightTheme } from 'styles/global';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { HelmetProvider } from 'react-helmet-async';
import { ReactQueryDevtools } from 'react-query/devtools';
import Router from 'routes/Router';
import Switch from 'react-switch';
import { isDarkAtom } from 'routes/atoms';
import { reset } from 'styles/global';
import { useRecoilState } from 'recoil';

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
  const [isDark, setDark] = useRecoilState(isDarkAtom);

  return (
    <>
      <SwitchWrapper>
        <SwitchLabel>
          <span>다크모드</span>
          <Switch
            onChange={() => setDark((previous) => !previous)}
            checked={isDark}
          />
        </SwitchLabel>
      </SwitchWrapper>

      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
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
