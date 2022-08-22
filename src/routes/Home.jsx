import Logo from '../logo.png'
import React, { useState } from 'react'
import toCommas from '../helpers/toCommas'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [cryptos, setCryptos] = useState({
    BTC: 19876.28,
    BNB: 6000,
    ETH: 4000
  })

  const getCryptoValue = () => {
    const allMoney = Object.values(cryptos).reduce((acc, curr) => acc + curr, 0)
    return allMoney
  }

  return (
    <div className='flex flex-col font-inter text-white'>
      <div className='flex justify-center font-inter text-white'>
        <div className='flex flex-col w-full max-w-sm px-4'>
          <img src={Logo} alt='Contcript logo' className='h-48 object-contain' />
          <div className='text-center'>
            <h5 className='font-semibold text-lg'>Criptomonedas Resguardadas</h5>
            <p>Cuenta 1</p>
            <p>$ {toCommas(getCryptoValue())}</p>

            <div className='grid grid-cols-3 grid-rows-3 mt-6'>
              <p className='font-bold'>BTC</p>
              <p className='text-left col-span-2'>$ {toCommas(cryptos.BTC)}</p>

              <p className='font-bold'>BNB</p>
              <p className='text-left col-span-2'>$ {toCommas(cryptos.BNB)}</p>

              <p className='font-bold'>ETH</p>
              <p className='text-left col-span-2'>$ {toCommas(cryptos.ETH)}</p>
            </div>

            <div className='flex justify-between mt-4'>
              <button className='bg-white/40 border-none rounded-xl py-3 px-10 my-4 font-bold text-white/80'>Recibir</button>
              <button className='bg-white/40 border-none rounded-xl py-3 px-10 my-4 font-bold text-white/80'>Enviar</button>
            </div>

            <div className='flex flex-col'>
              <Button onClick={() => navigate('/calculator')}>Asesoramiento contable y fiscal del uso de criptomonedas</Button>
              <Button>Guia para introducirse a las criptomonedas</Button>
              <Button>Asistencia técnica y consultoría</Button>
              <Button>Tokens ganadores</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Button = ({ children, ...props }) => {
  return (
    <button className='h-16 bg-white/40 border-none rounded-xl px-8 my-4 font-bold text-white/80' {...props}>
      {children}
    </button>
  )
}

export default Home
