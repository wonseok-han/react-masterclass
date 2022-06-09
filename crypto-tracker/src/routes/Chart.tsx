import { ChartRouteProps, CoinChartProps } from './types';
import { useOutletContext, useParams } from 'react-router-dom';

import { fetchCoinHistory } from 'api';
import styled from 'styled-components';
import { useQuery } from 'react-query';

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Chart = () => {
  const params = useParams();
  const { coinId }: ChartRouteProps = useOutletContext();
  const { isLoading, data } = useQuery<Array<CoinChartProps>>(
    ['ohlcv', coinId || params.coinId],
    () => fetchCoinHistory(coinId || params.coinId)
  );

  return (
    <>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <p>{JSON.stringify(data)}</p>
        </>
      )}
    </>
  );
};

export default Chart;
