import { CircleProps, ContainerProps } from './types';

import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 2px solid ${(props) => props.borderColor};
`;

const Circle = ({ bgColor, borderColor }: CircleProps) => {
  const [counter, setCounter] = useState<number>(1);

  return (
    <div onClick={() => setCounter(counter + 1)}>
      <Container bgColor={bgColor} borderColor={borderColor}>
        {counter}
      </Container>
    </div>
  );
};

export default Circle;
