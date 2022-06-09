import { CoinPriceProps, CoinProps, RouteStateProps } from './types';
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

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

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  padding: 7px 0px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.isActive ? props.theme.accentColor : 'rgba(0, 0, 0, 0.5)'};
  a {
    display: block;
  }
  color: ${(props) => props.theme.textColor};
`;

const Coin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { coinId } = useParams();
  const { state } = useLocation() as RouteStateProps;
  const [coin, setCoin] = useState<CoinProps>();
  const [price, setPrice] = useState<CoinPriceProps>();
  const priceMatch = useMatch('/:coinId/price');
  const chartMatch = useMatch('/:coinId/chart');

  const handleFetch = async () => {
    const infoData = (await (
      await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
    ).json()) as CoinProps;

    const priceData = (await (
      await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
    ).json()) as CoinPriceProps;

    setCoin({
      ...infoData,
    });

    setPrice({
      ...priceData,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    void handleFetch();
  }, [coinId]);

  return (
    <Container>
      <Header>
        <Title>
          {state?.name ? state.name : isLoading ? 'Loading' : coin?.name}
        </Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{coin?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${coin?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{coin?.open_source ? 'Yes' : 'No'}</span>
            </OverviewItem>
          </Overview>
          <Description>{coin?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{price?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{price?.max_supply}</span>
            </OverviewItem>
          </Overview>
        </>
      )}

      <Tabs>
        <Tab isActive={chartMatch !== null}>
          <Link to={`/${coinId}/chart`}>Chart</Link>
        </Tab>
        <Tab isActive={priceMatch !== null}>
          <Link to={`/${coinId}/price`}>Price</Link>
        </Tab>
      </Tabs>
      <Outlet />
    </Container>
  );
};

export default Coin;
