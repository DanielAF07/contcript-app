import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useRef } from 'react'
import toast from 'react-hot-toast'
import useCryptos from '../hooks/useCryptos'
import { useWalletStore } from '../stores/WalletStore'

const ModalReceive = ({ isOpen, setIsOpen }) => {
  const { address, receiveCryptos } = useCryptos()
  const addressRef = useRef(null)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address)
    toast.success('Dirección copiada al portapapeles')
  }

  const onSubmit = () => {
    receiveCryptos({ crypto: 'BTC' })
    setIsOpen(false)
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
            <Dialog.Title className='font-bold text-xl'>Recibir</Dialog.Title>
            <Dialog.Description>
              Escanea la dirección para recibir pago.
            </Dialog.Description>
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${address}`} alt='' />
            <div className='relative rounded-full bg-slate-200 px-4 max-w-[200px]'>
              <p className='truncate pr-4' ref={addressRef}>{address}</p>
              <button
                className='absolute right-2 top-0.5'
                onClick={copyToClipboard}
              >
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z' />
                </svg>
              </button>
            </div>
            <button
              className='bg-slate-200 rounded-full px-16 py-1 font-bold mt-4'
              onClick={onSubmit}
            >Listo
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ModalReceive
