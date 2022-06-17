import { motion } from 'framer-motion';
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
  flex-direction: row;
  gap: 50px;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClicked = () => setIsClicked((previous) => !previous);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Wrapper onClick={toggleClicked}>
        <Box
          style={{
            justifyContent: isClicked ? 'center' : 'flex-start',
            alignItems: isClicked ? 'center' : 'flex-start',
          }}
        >
          <Circle layout />
        </Box>
        <Box>
          {!isClicked ? (
            <Circle
              layoutId="circle"
              style={{
                borderRadius: 50,
              }}
            />
          ) : null}
        </Box>
        <Box>
          {isClicked ? (
            <Circle
              layoutId="circle"
              style={{
                borderRadius: 0,
                scale: 2,
              }}
            />
          ) : null}
        </Box>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
