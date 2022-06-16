import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';
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

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

// const boxVariants = {
//   hover: {
//     scale: 1,
//     rotateZ: 90,
//   },
//   click: {
//     scale: 1,
//     borderRadius: '100px',
//   },
// };

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);

  useEffect(() => {
    x.onChange(() => {
      console.log(x.get());
    });

    scale.onChange(() => {
      console.log(scale.get());
    });
  }, [x]);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Wrapper>
        <Box
          style={{
            x,
            scale,
          }}
          drag="x"
          dragSnapToOrigin
        />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
