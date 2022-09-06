import Logo from '../logo.png'
import toCommas from '../helpers/toCommas'
import { useNavigate } from 'react-router-dom'
import useCryptos from '../hooks/useCryptos'
import StyledButton from '../components/common/StyledButton'
import { useState } from 'react'
import ModalReceive from '../components/ModalReceive'
import ModalSend from '../components/ModalSend'
import ModalHelp from '../components/ModalHelp'
import ModalCryptos from '../components/ModalCryptos'

const initialCryptos = {
  BTC: 19876.28,
  BNB: 6000,
  ETH: 4000
}

const Home = () => {
  const navigate = useNavigate()
  const { getTotal, cryptos } = useCryptos(initialCryptos)

  const [sendIsOpen, setSendIsOpen] = useState(false)
  const [receiveIsOpen, setReceiveIsOpen] = useState(false)
  const [helpIsOpen, setHelpIsOpen] = useState(false)
  const [cryptosIsOpen, setCryptosIsOpen] = useState(false)

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
                <p className='text-left col-span-2'>$ {toCommas(cryptos?.BTC?.toFixed(2))}</p>

                <p className='font-bold'>BNB</p>
                <p className='text-left col-span-2'>$ {toCommas(cryptos?.BNB?.toFixed(2))}</p>

                <p className='font-bold'>ETH</p>
                <p className='text-left col-span-2'>$ {toCommas(cryptos?.ETH?.toFixed(2))}</p>
              </div>

              <div className='flex justify-between mt-4'>
                <button
                  className='bg-white/40 border-none rounded-xl py-3 px-10 my-4 font-bold text-white/80'
                  // onClick={() => sendCryptos({ crypto: 'BTC' })}
                  onClick={() => setSendIsOpen(true)}
                >Enviar
                </button>
                <button
                  className='bg-white/40 border-none rounded-xl py-3 px-10 my-4 font-bold text-white/80'
                  // onClick={() => receiveCryptos({ crypto: 'BTC' })}
                  onClick={() => setReceiveIsOpen(true)}
                >Recibir
                </button>
              </div>

              <div className='flex flex-col'>
                <StyledButton onClick={() => navigate('/calculator')}>Asesoramiento contable y fiscal del uso de criptomonedas</StyledButton>
                <StyledButton onClick={() => { window.location.href = 'https://drive.google.com/file/d/1_o8yOTgm2_cqjfMCtAg0bOeYI0ZGjDsX/view?usp=sharing' }}>Guia para introducirse a las criptomonedas</StyledButton>
                <StyledButton onClick={() => setHelpIsOpen(true)}>Asistencia técnica y consultoría</StyledButton>
                <StyledButton onClick={() => setCryptosIsOpen(true)}>Tokens ganadores</StyledButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalReceive
        isOpen={receiveIsOpen}
        setIsOpen={setReceiveIsOpen}
      />
      <ModalSend
        isOpen={sendIsOpen}
        setIsOpen={setSendIsOpen}
      />
      <ModalHelp
        isOpen={helpIsOpen}
        setIsOpen={setHelpIsOpen}
      />
      <ModalCryptos
        isOpen={cryptosIsOpen}
        setIsOpen={setCryptosIsOpen}
      />
    </>
  )
}

export default Home
