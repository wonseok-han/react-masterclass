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
  gap: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 40vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  height: 50px;
  width: 50px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Button = styled(motion.button)`
  color: rgb(0, 0, 255);
  font-weight: bold;
  scale: 1;
`;

const buttonVariants = {
  initial: {
    scale: 1,
  },
  hover: (id: string) =>
    id === 'box1'
      ? {
          scale: 1.1,
          originX: 1,
          originY: 1,
        }
      : {
          scale: 1.1,
          originX: -0.1,
          originY: -0.1,
        },
};

function App() {
  const [id, setId] = useState<string | null>(null);
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => setIsToggle((previous) => !previous);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <Grid>
          <Box
            variants={buttonVariants}
            custom={'box1'}
            initial="initial"
            whileHover="hover"
            layoutId="box1"
            onClick={() => setId('box1')}
          />
          <Box>{!isToggle && <Circle layoutId="circle" />}</Box>
          <Box>{isToggle && <Circle layoutId="circle" />}</Box>
          <Box
            variants={buttonVariants}
            custom={'box4'}
            initial="initial"
            whileHover="hover"
            layoutId="box4"
            onClick={() => setId('box4')}
          />
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
                  height: 300,
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                }}
              />
            </Overlay>
          ) : null}
        </AnimatePresence>
        <AnimatePresence>
          {isToggle && (
            <Button
              layout
              animate={{
                color: 'rgb(255,165,0)',
                scale: 1.3,
                border: '1px solid rgb(255,165,0)',
              }}
              onClick={handleToggle}
            >
              Switch
            </Button>
          )}
          {!isToggle && (
            <Button
              layout
              animate={{
                color: 'rgb(0, 0, 255)',
                scale: 1,
                border: '1px solid rgb(0, 0, 255)',
              }}
              onClick={handleToggle}
            >
              Switch
            </Button>
          )}
        </AnimatePresence>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
