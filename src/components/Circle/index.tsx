import { CircleProps, ContainerProps } from './types';

import styled from 'styled-components';

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 2px solid ${(props) => props.borderColor};
`;

const Circle = ({ bgColor, borderColor }: CircleProps) => {
  return (
    <div>
      <Container bgColor={bgColor} borderColor={borderColor} />
    </div>
  );
};

export default Circle;
