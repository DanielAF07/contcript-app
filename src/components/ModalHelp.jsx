import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import toast from 'react-hot-toast'
import useCryptos from '../hooks/useCryptos'
import { useWalletStore } from '../stores/WalletStore'

const ModalHelp = ({ isOpen, setIsOpen }) => {
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
            <Dialog.Title className='font-bold text-xl'>Asistencia Técnica</Dialog.Title>
            <div className='flex flex-col space-y-3'>

              <Dialog.Description>
                ¿En que te podemos ayudar?
              </Dialog.Description>
              <button
                className='text-left px-4 py-2 rounded-xl bg-slate-200'
                onClick={() => { window.location.href = 'https://api.whatsapp.com/send?phone=5218621034576&text=Hola%2C%20Tengo%20dudas%20sobre%20mi%20servicio' }}
              >
                🤔 Dudas sobre mi servicio
              </button>
              <button
                className='text-left px-4 py-2 rounded-xl bg-slate-200'
                onClick={() => { window.location.href = 'https://api.whatsapp.com/send?phone=5218621034576&text=Hola%2C%20necesito%20asistencia%20t%C3%A9cnica' }}
              >
                🛠 Asistencia técnica
              </button>
              <button
                className='text-left px-4 py-2 rounded-xl bg-slate-200'
                onClick={() => { window.location.href = 'https://api.whatsapp.com/send?phone=5218621034576&text=Hola%2C%20me%20gustar%C3%ADa%20una%20consultor%C3%ADa' }}
              >
                💼 Consultoría
              </button>
              <button
                className='text-left px-4 py-2 rounded-xl bg-slate-200'
                onClick={() => { window.location.href = 'https://api.whatsapp.com/send?phone=5218621034576&text=Hola%2C%20tengo%20dudas%20sobre%20mi%20suscripci%C3%B3n.' }}
              >
                👨🏻‍💻 Dudas sobre mi suscripción
              </button>
              <button
                className='text-left px-4 py-2 rounded-xl bg-slate-200'
                onClick={() => { window.location.href = 'https://api.whatsapp.com/send?phone=5218621034576&text=Hola%2C%20me%20gustar%C3%ADa%20cambiar%20mi%20contrase%C3%B1a.' }}
              >
                🔒 Solicitar cambio de contraseña
              </button>
            </div>

            <button
              className='bg-slate-200 rounded-full px-16 py-1 font-bold mt-4'
              onClick={() => setIsOpen(false)}
            >Cerrar
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ModalHelp
