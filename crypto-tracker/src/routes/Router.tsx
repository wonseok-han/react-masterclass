import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Chart from './Chart';
import Coin from './Coin';
import Coins from './Coins';
import Price from './Price';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/:coinId" element={<Coin />}>
          <Route path="price" element={<Price />} />
          <Route path="chart" element={<Chart />} />
        </Route>
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
