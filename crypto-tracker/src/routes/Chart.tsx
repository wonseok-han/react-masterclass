import { ChartRouteProps, CoinChartProps } from './types';
import styled, { useTheme } from 'styled-components';
import { useOutletContext, useParams } from 'react-router-dom';

import ReactApexChart from 'react-apexcharts';
import { fetchCoinHistory } from 'api';
import { isDarkAtom } from './atoms';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Chart = () => {
  const isDark = useRecoilValue(isDarkAtom);
  const params = useParams();
  const { accentColor } = useTheme();

  const { coinId }: ChartRouteProps = useOutletContext();
  const { isLoading, data } = useQuery<Array<CoinChartProps>>(
    ['ohlcv', coinId || params.coinId],
    () => fetchCoinHistory(coinId || params.coinId),
    {
      refetchInterval: 10000,
    }
  );

  return (
    <>
      {isLoading || !data ? (
        <Loader>Loading...</Loader>
      ) : (
        <ReactApexChart
          type="candlestick"
          series={[
            {
              name: 'price',
              data: data.map((price) => ({
                x: new Date(price.time_close),
                y: [
                  price.open.toFixed(2),
                  price.high.toFixed(2),
                  price.low.toFixed(2),
                  price.close.toFixed(2),
                ],
              })),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? 'dark' : 'light',
            },
            chart: {
              type: 'candlestick',
              background: 'transprent',
              toolbar: {
                show: false,
              },
            },
            xaxis: {
              categories: data?.map((price) => price.time_close),
              type: 'datetime',
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
            },
            title: {
              text: 'CandleStic Chart',
              align: 'center',
              style: {
                color: accentColor,
              },
            },
          }}
        />
      )}
    </>
  );
};

export default Chart;
