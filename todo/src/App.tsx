import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { darkTheme, lightTheme, reset } from 'styles/global';

import { isDarkAtom } from 'routes/atoms';
import { useRecoilValue } from 'recoil';

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

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
