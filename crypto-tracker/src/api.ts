const baseUrl = `https://api.coinpaprika.com/v1`;

export const fetchCoins = () => {
  return fetch(`${baseUrl}/coins`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

export const fetchCoin = (url: string, coinId: string) => {
  return fetch(`${baseUrl}/${url}/${coinId}`)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
