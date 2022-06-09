export const fetchCoins = () => {
  return fetch('https://api.coinpaprika.com/v1/coins')
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
