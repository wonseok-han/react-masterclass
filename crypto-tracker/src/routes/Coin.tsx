import { useEffect, useState } from 'react';

import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface RouteStateProps {
  state: {
    name: string;
  };
}

const Coin = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const { coinId } = useParams();
  const { state } = useLocation() as RouteStateProps;

  useEffect(() => {
    setIsLoading(true);
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state?.name || 'Loading...'}</Title>
      </Header>
      {isLoading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
};

export default Coin;
