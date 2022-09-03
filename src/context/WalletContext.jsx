import { createContext, useState } from 'react'

export const WalletContext = createContext()

const WalletProvider = ({ children }) => {
  const [wallet] = useState({
    address: '0x996E79deEe4f066dc146Cf8aCf947bEcbc15A850'
  })

  return (
    <WalletContext.Provider value={{
      wallet
    }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export default WalletProvider
