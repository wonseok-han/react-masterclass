import Router from 'routes/Router';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styles/global';

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
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
