import useCoinStore from "../store/coinStore";

function AddCoin() {
  const addCoin = useCoinStore((state) => state.addCoin);
  return <button onClick={addCoin}>Tambah Koin</button>;
}

export default AddCoin;
