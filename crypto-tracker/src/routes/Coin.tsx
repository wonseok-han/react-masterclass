import { CoinPriceProps, CoinProps } from './types';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import styled from 'styled-components';

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
  const { coinId } = useParams();
  const { state } = useLocation() as RouteStateProps;
  const [coin, setCoin] = useState<CoinProps>();
  const [price, setPrice] = useState<CoinPriceProps>();

  const handleFetch = async () => {
    const infoData = (await (
      await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
    ).json()) as CoinProps;

    const priceData = (await (
      await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
    ).json()) as CoinPriceProps;

    setIsLoading(false);

    setCoin({
      ...infoData,
    });

    setPrice({
      ...priceData,
    });

    console.log(infoData);
    console.log(priceData);
    console.log(state);
  };

  useEffect(() => {
    void handleFetch();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{coin?.name || 'Loading...'}</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <div>{price.quotes.USD.price}</div>
      )}
    </Container>
  );
};

export default Coin;
