import { CircleProps, ContainerProps } from './types';

import styled from 'styled-components';

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

const Circle = ({ bgColor }: CircleProps) => {
  return (
    <div>
      <Container bgColor={bgColor} />
    </div>
  );
};

export default Circle;
