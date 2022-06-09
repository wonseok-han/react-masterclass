/* eslint-disable @typescript-eslint/indent */
const baseUrl = `https://api.coinpaprika.com/v1`;

export const commonFetch = (url: string, key?: string) => {
  return key
    ? fetch(`${baseUrl}/${url}/${key}`)
        .then((response) => response.json())
        .catch((error) => console.log(error))
    : fetch(`${baseUrl}/${url}`)
        .then((response) => response.json())
        .catch((error) => console.log(error));
};

export const fetchCoinHistory = (coinId: string) => {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 23 * 7 * 1;

  return fetch(
    `${baseUrl}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
