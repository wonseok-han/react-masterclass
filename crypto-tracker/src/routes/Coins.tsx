import { useEffect, useState } from 'react';

import { CoinProps } from './types.d';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: center;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 10px;
  border-radius: 15px;

  a {
    transition: color 0.2s ease-in;
    display: block;
    padding: 20px;
  }

  :hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
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

const Coins = () => {
  const [coins, setCoins] = useState<Array<CoinProps>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleFetch = () => {
    fetch('https://api.coinpaprika.com/v1/coins')
      .then((response) => {
        response
          .json()
          .then((data: Array<CoinProps>) => {
            const resData: Array<CoinProps> = data;
            setCoins(
              resData?.slice(0, 100).map((item: CoinProps) => ({
                ...item,
                isNew: item.is_new,
                isActive: item.is_active,
              }))
            );
            setIsLoading(false);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`${coin.id}`}>{coin.name} &rarr;</Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
};

export default Coins;
