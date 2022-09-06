import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useWalletStore = create(persist((set, get) => ({
  address: '0x996E79deEe4f066dc146Cf8aCf947bEcbc15A850',
  cryptos: {},
  setCryptos: (cryptos) => set({ cryptos }),
  setCrypto: (key, value) => set((state) => ({ cryptos: { ...state.cryptos, [key]: value } })),
  setAddress: (address) => set({ address }),
  getCryptoKeys: () => Object.keys(get().cryptos),
  getCrypto: (key) => get().cryptos[key],
  getBalance: (key) => {
    if (key) return get().cryptos[key]
    return sumAllCryptos(get().cryptos)
  }
})))

const sumAllCryptos = (cryptos) => {
  return Object.values(cryptos).reduce((a, b) => a + b, 0)
}
