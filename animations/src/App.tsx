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
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    rotateX: 180,
    transition: {
      duration: 0.3,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);

  const nextPlease = () => {
    setIsBack(false);
    setVisible((previous) => (previous === 10 ? 1 : previous + 1));
  };

  const prevPlease = () => {
    setIsBack(true);
    setVisible((previous) => (previous === 1 ? 10 : previous - 1));
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <AnimatePresence exitBeforeEnter custom={isBack}>
          <Box
            variants={box}
            custom={isBack}
            initial={'entry'}
            animate={'center'}
            exit={'exit'}
            key={visible}
          >
            {visible}
          </Box>
        </AnimatePresence>
        <button onClick={prevPlease}>Prev</button>
        <button onClick={nextPlease}>Next</button>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
