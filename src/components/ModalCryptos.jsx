import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import TokensGanadoresImg from '../assets/tokens-ganadores.jpg'

const ModalCryptos = ({ isOpen, setIsOpen }) => {
  const onSubmit = () => {
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
            <Dialog.Title className='font-bold text-xl'>Tokens Ganadores</Dialog.Title>
            <img src={TokensGanadoresImg} alt='Tokens Ganadores' className='w-full' />
            <button
              className='bg-slate-200 rounded-full px-16 py-1 font-bold mt-4'
              onClick={onSubmit}
            >Cerrar
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ModalCryptos
