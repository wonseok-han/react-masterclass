import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
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

const Wrapper = styled(motion.div)`
  height: 200vh;
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
  const rotate = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      'linear-gradient(135deg, rgb(102, 196, 255), rgb(28, 9, 244))',
      'linear-gradient(135deg, rgb(238, 0, 153), rgb(214, 7, 255))',
      'linear-gradient(135deg, rgb(141, 255, 106), rgb(219, 255, 18))',
    ]
  );
  const { scrollY, scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  useEffect(() => {
    scrollY.onChange(() => {
      console.log(scrollY.get());
    });
  }, [scrollYProgress]);

  useEffect(() => {
    x.onChange(() => {
      console.log(x.get());
    });

    rotate.onChange(() => {
      console.log(rotate.get());
    });
  }, [x]);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Wrapper
        style={{
          background: gradient,
        }}
      >
        <Box
          style={{
            x,
            rotate,
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
