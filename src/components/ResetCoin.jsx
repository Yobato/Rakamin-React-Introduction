import useCoinStore from "../store/coinStore";

function ResetCoin() {
  const resetCoin = useCoinStore((state) => state.resetCoin);
  return <button onClick={resetCoin}>Reset Koin</button>;
}

export default ResetCoin;
