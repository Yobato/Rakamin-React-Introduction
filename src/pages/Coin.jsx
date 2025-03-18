// import React from 'react'

import AddCoin from "../components/AddCoin";
import ResetCoin from "../components/ResetCoin";
import useCoinStore from "../store/coinStore";

function Coin() {
  const coins = useCoinStore((state) => state.coins);
  return (
    <div>
      <h2>Jumlah coins : {coins}</h2>
      <AddCoin />
      <ResetCoin />
    </div>
  );
}

export default Coin;
