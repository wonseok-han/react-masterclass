import { CoinProps, CoinTickersProps, RouteStateProps } from './types';
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
} from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import { commonFetch } from 'api';
import styled from 'styled-components';
import { useQuery } from 'react-query';

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

const BackButton = styled.div`
  margin-right: 30px;
  font-weight: bold;
  font-size: 40px;
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  border-radius: 50px;
  width: 50px;
  height: 50px;
  display: block;
  text-align: center;

  :hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const Coin = () => {
  const { coinId } = useParams();
  const { state } = useLocation() as RouteStateProps;

  const { isLoading: isCoinLoading, data: coin } = useQuery<CoinProps>(
    ['coin', coinId],
    () => commonFetch('coins', coinId)
  );
  const { isLoading: isTickersLoading, data: tickers } =
    useQuery<CoinTickersProps>(
      ['tickers', coinId],
      () => commonFetch('tickers', coinId),
      {
        refetchInterval: 5000,
      }
    );

  const priceMatch = useMatch('/:coinId/price');
  const chartMatch = useMatch('/:coinId/chart');

  const isLoading = isCoinLoading || isTickersLoading;

  return (
    <Container>
      <Header>
        <BackButton>
          <Link to={`/`}>&larr;</Link>
        </BackButton>
        <Helmet>
          <title>
            {state?.name ? state.name : isLoading ? 'Loading' : coin?.name}
          </title>
        </Helmet>
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
              <span>Price:</span>
              <span>{tickers?.quotes.USD.price}</span>
            </OverviewItem>
          </Overview>
          <Description>{coin?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickers?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickers?.max_supply}</span>
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
      <Outlet
        context={{
          coinId,
        }}
      />
    </Container>
  );
};

export default Coin;
