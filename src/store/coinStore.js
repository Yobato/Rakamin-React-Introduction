import { create } from "zustand"

const useCoinStore = create((set) => ({
    coins: 0,
    addCoin: () => set((state) => ({ coins: state.coins + 1 })),
    resetCoin: () => set({ coins: 0 })
}))
export default useCoinStore;
