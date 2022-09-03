import { useState } from 'react'
import toast from 'react-hot-toast'

const useCryptos = (initialState) => {
  const [cryptos, setCryptos] = useState(initialState)

  const getRandomQuantity = (min, max) => {
    return Math.round(Math.random() * max - min) + min
  }

  const sendCryptos = ({ crypto, quantity }) => {
    if (!quantity) quantity = getRandomQuantity(0, 350)
    if (quantity < 0) return false
    if (quantity > cryptos[crypto]) return false
    const newQuantity = cryptos[crypto] - quantity
    setCryptos({
      ...cryptos,
      [crypto]: newQuantity
    })
    toast.error(`${crypto}: -$${quantity}`, {
      icon: '💸'
    })
  }

  const receiveCryptos = ({ crypto, quantity }) => {
    if (!quantity) quantity = getRandomQuantity(0, 350)
    const newQuantity = cryptos[crypto] + quantity
    setCryptos({
      ...cryptos,
      [crypto]: newQuantity
    })
    toast.success(`${crypto}: +$${quantity}`, {
      icon: '🤑'
    })
  }

  const getTotal = () => {
    const allMoney = Object.values(cryptos).reduce((acc, curr) => acc + curr, 0)
    return allMoney
  }

  return {
    sendCryptos,
    receiveCryptos,
    getTotal,
    cryptos
  }
}

export default useCryptos
