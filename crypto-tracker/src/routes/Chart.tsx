import { ChartRouteProps, CoinChartProps } from './types';
import { useOutletContext, useParams } from 'react-router-dom';

import ReactApexChart from 'react-apexcharts';
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
      {isLoading || !data ? (
        <Loader>Loading...</Loader>
      ) : (
        <ReactApexChart
          type="line"
          series={[
            {
              name: 'price',
              data: data?.map((price) => price.close),
            },
          ]}
          options={{
            theme: {
              mode: 'dark',
            },
            chart: {
              height: 500,
              width: 500,
              background: 'transprent',
              toolbar: {
                show: false,
              },
            },
            grid: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
            stroke: {
              curve: 'smooth',
              width: 5,
            },
          }}
        />
      )}
    </>
  );
};

export default Chart;
