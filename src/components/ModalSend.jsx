import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import toast from 'react-hot-toast'
import useCryptos from '../hooks/useCryptos'
import { useWalletStore } from '../stores/WalletStore'

const ModalSend = ({ isOpen, setIsOpen }) => {
  const { sendCryptos, address, cryptos } = useCryptos()
  const cryptoKeys = useWalletStore((state) => state.getCryptoKeys())
  const [formData, setFormData] = React.useState({
    crypto: '',
    amount: 0,
    address: ''
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = () => {
    // Validate
    if (formData.crypto === '') {
      return toast.error('Selecciona una criptomoneda')
    }
    if (formData.amount <= 0) {
      return toast.error('El monto a enviar debe ser mayor a 0')
    }
    if (formData.amount > cryptos[formData.crypto]) {
      return toast.error('No tienes suficientes fondos para enviar esa cantidad')
    }
    if (formData.address === '') {
      return toast.error('Se debe llenar el campo de destinatario')
    }
    if (formData.address === address) {
      return toast.error('No puedes enviar cryptos a ti mismo')
    }
    // Send
    sendCryptos({ crypto: formData.crypto, quantity: formData.amount })
    resetFormData()
    setIsOpen(false)
  }

  const resetFormData = () => {
    setFormData({
      crypto: '',
      amount: 0,
      address: ''
    })
  }

  return (
    <Transition
      show={isOpen}
      enter='transition duration-100 ease-out'
      enterFrom='transform scale-95 opacity-0'
      enterTo='transform scale-100 opacity-100'
      leave='transition duration-75 ease-out'
      leaveFrom='transform scale-100 opacity-100'
      leaveTo='transform scale-95 opacity-0'
      as={Fragment}
    >
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='fixed inset-0 h-[100vh] z-50'
      >
        <div className='fixed inset-0 bg-black/40' aria-hidden='true' />
        <div className='fixed inset-0 flex items-center justify-center p-4'>

          <Dialog.Panel className='w-full max-w-sm rounded bg-white flex flex-col justify-center items-center gap-1 py-4'>
            <Dialog.Title className='font-bold text-xl'>Enviar</Dialog.Title>
            <Dialog.Description>
              Destinatario
            </Dialog.Description>
            <input
              type='text'
              className='px-4 py-1 rounded-xl bg-slate-200'
              value={formData.address}
              onChange={handleChange}
              name='address'
            />
            <Dialog.Description>
              Selecciona la criptomoneda que deseas enviar
            </Dialog.Description>
            <select
              name='crypto'
              id='crypto'
              className='px-4 py-1 rounded-xl bg-slate-200'
              value={formData.crypto}
              onChange={handleChange}
            >
              <option value='' disabled>Selecciona una criptomoneda</option>
              {cryptoKeys.map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </select>
            <Dialog.Description>
              Cantidad a enviar
            </Dialog.Description>
            <input
              type='number'
              className='px-4 py-1 rounded-xl bg-slate-200'
              name='amount'
              value={formData.amount}
              onChange={handleChange}
            />
            <button
              className='bg-slate-200 rounded-full px-16 py-1 font-bold mt-4'
              onClick={onSubmit}
            >Enviar
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ModalSend
