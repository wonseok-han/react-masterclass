import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { darkTheme, reset } from 'styles/global';

import TodoList from 'TodoList';

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
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <TodoList />
      </ThemeProvider>
    </>
  );
}

export default App;
