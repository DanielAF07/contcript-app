import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useWalletStore } from '../stores/WalletStore'

const useCryptos = (initialState) => {
  const cryptos = useWalletStore((state) => state.cryptos)
  const address = useWalletStore((state) => state.address)
  const setCryptos = useWalletStore((state) => state.setCryptos)
  const setCrypto = useWalletStore((state) => state.setCrypto)
  const getBalance = useWalletStore((state) => state.getBalance)

  useEffect(() => {
    if (Object.keys(cryptos).length === 0 && initialState) {
      setCryptos(initialState)
    }
  }, [])

  const getRandomQuantity = (min, max) => {
    return Math.round(Math.random() * max - min) + min
  }

  const sendCryptos = ({ crypto, quantity }) => {
    if (!quantity) quantity = getRandomQuantity(0, 350)
    if (quantity < 0) return false
    if (quantity > cryptos[crypto]) return false
    const newQuantity = cryptos[crypto] - quantity
    setCrypto(crypto, newQuantity)
    toast.error(`${crypto}: -$${quantity}`, {
      icon: '💸'
    })
    window.localStorage.setItem('cryptos', JSON.stringify({
      ...cryptos,
      [crypto]: newQuantity
    }))
    console.log('Sending and localStorage updated')
  }

  const receiveCryptos = ({ crypto, quantity }) => {
    if (!quantity) quantity = getRandomQuantity(0, 350)
    const newQuantity = cryptos[crypto] + quantity
    setCrypto(crypto, newQuantity)
    toast.success(`${crypto}: +$${quantity}`, {
      icon: '🤑'
    })
    window.localStorage.setItem('cryptos', JSON.stringify({
      ...cryptos,
      [crypto]: newQuantity
    }))
  }

  const getTotal = (cryptoKey) => {
    if (cryptoKey) return cryptos[cryptoKey]
    return getBalance()
  }

  return {
    sendCryptos,
    receiveCryptos,
    getTotal,
    cryptos,
    address
  }
}

export default useCryptos
