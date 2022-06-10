import { ChartRouteProps, CoinTickersProps } from './types';
import styled, { keyframes } from 'styled-components';
import { useOutletContext, useParams } from 'react-router-dom';

import { commonFetch } from 'api';
import { useQuery } from 'react-query';

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const UsdList = styled.ul``;

const fadeInAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Usd = styled.li`
  background-color: lightslategray;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  border-radius: 15px;
  animation: ${fadeInAnimation} 3s;

  span {
    display: flex;
    transition: color 0.2s ease-in;
    padding: 20px;
    align-items: center;
  }

  :hover {
    span {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Price = () => {
  const params = useParams();
  const { coinId }: ChartRouteProps = useOutletContext();
  const { isLoading, data } = useQuery<CoinTickersProps>(
    ['tickers', coinId || params.coinId],
    () => commonFetch('tickers', coinId),
    {
      refetchInterval: 5000,
    }
  );

  return (
    <>
      {isLoading || !data?.quotes?.USD ? (
        <Loader>Loading...</Loader>
      ) : (
        <UsdList>
          {Object.keys(data.quotes.USD).map((key) => (
            <Usd key={key}>
              <span>
                <>
                  {key} : {data.quotes.USD?.[key]}
                </>
              </span>
            </Usd>
          ))}
        </UsdList>
      )}
    </>
  );
};

export default Price;
