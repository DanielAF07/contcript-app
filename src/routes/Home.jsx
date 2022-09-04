import Logo from '../logo.png'
import toCommas from '../helpers/toCommas'
import { useNavigate } from 'react-router-dom'
import useCryptos from '../hooks/useCryptos'
import StyledButton from '../components/common/StyledButton'
import { useState } from 'react'
import ModalSend from '../components/ModalSend'

const Home = () => {
  const navigate = useNavigate()
  const { getTotal, sendCryptos, receiveCryptos, cryptos } = useCryptos({
    BTC: 19876.28,
    BNB: 6000,
    ETH: 4000
  })

  const [sendIsOpen, setSendIsOpen] = useState(false)

  return (
    <>
      <div className='flex flex-col font-inter text-white'>
        <div className='flex justify-center font-inter text-white'>
          <div className='flex flex-col w-full max-w-sm px-4'>
            <img src={Logo} alt='Contcript logo' className='h-48 object-contain' />
            <div className='text-center'>
              <h5 className='font-semibold text-lg'>Criptomonedas Resguardadas</h5>
              <p>Cuenta 1</p>
              <p>$ {toCommas(getTotal())}</p>

              <div className='grid grid-cols-3 grid-rows-3 mt-6'>
                <p className='font-bold'>BTC</p>
                <p className='text-left col-span-2'>$ {toCommas(cryptos?.BTC)}</p>

                <p className='font-bold'>BNB</p>
                <p className='text-left col-span-2'>$ {toCommas(cryptos?.BNB)}</p>

                <p className='font-bold'>ETH</p>
                <p className='text-left col-span-2'>$ {toCommas(cryptos?.ETH)}</p>
              </div>

              <div className='flex justify-between mt-4'>
                <button
                  className='bg-white/40 border-none rounded-xl py-3 px-10 my-4 font-bold text-white/80'
                  onClick={() => sendCryptos({ crypto: 'BTC' })}
                >Enviar
                </button>
                <button
                  className='bg-white/40 border-none rounded-xl py-3 px-10 my-4 font-bold text-white/80'
                  // onClick={() => receiveCryptos({ crypto: 'BTC' })}
                  onClick={() => setSendIsOpen(true)}
                >Recibir
                </button>
              </div>

              <div className='flex flex-col'>
                <StyledButton onClick={() => navigate('/calculator')}>Asesoramiento contable y fiscal del uso de criptomonedas</StyledButton>
                <StyledButton onClick={() => { window.location.href = 'https://drive.google.com/file/d/1_o8yOTgm2_cqjfMCtAg0bOeYI0ZGjDsX/view?usp=sharing' }}>Guia para introducirse a las criptomonedas</StyledButton>
                <StyledButton>Asistencia técnica y consultoría</StyledButton>
                <StyledButton>Tokens ganadores</StyledButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalSend
        isOpen={sendIsOpen}
        setIsOpen={setSendIsOpen}
        onComplete={() => receiveCryptos({ crypto: 'BTC' })}
      />
    </>
  )
}

export default Home
