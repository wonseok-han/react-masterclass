import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import { darkTheme, reset } from 'styles/global';

const GlobalStyle = createGlobalStyle`
${reset}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color:black;
  line-height: 1.2;
  background:linear-gradient(135deg,#e09,#d0e);
}
`;

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;

  div:first-child {
    grid-column: span 2;
  }
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [id, setId] = useState<string | null>(null);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <Grid>
          {[1, 2, 3, 4].map((n) => (
            <Box
              key={n}
              layoutId={String(n)}
              onClick={() => setId(String(n))}
            />
          ))}
        </Grid>
        <AnimatePresence>
          {id ? (
            <Overlay
              initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
              animate={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              exit={{
                backgroundColor: 'rgba(0, 0, 0, 0)',
              }}
              onClick={() => setId(null)}
            >
              <Box
                layoutId={id}
                style={{
                  width: 400,
                  height: 200,
                }}
              />
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
