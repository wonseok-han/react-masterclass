import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Coin from './Coin';
import Coins from './Coins';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId" element={<Coin />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
