import React, { useContext } from 'react'
import Logo from '../logo.png'
import StyledSelect from '../components/StyledSelect'
import { activitiesOptions, activos, cryptos, operations } from '../catalogos'
import { FormContext } from '../context/FormContext'
import { toast } from 'react-toastify'

function FormScreen () {
  const { formData, setFormData, send } = useContext(FormContext)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.activity && formData.operation && formData.activo && formData.crypto && formData.price && formData.change) {
      return send()
    }
    return toast('Por favor, llene todos los campos', {
      type: 'error',
      theme: 'colored'
    })
  }

  return (
    <div className='flex justify-center font-inter text-white'>
      <form className='flex flex-col w-full max-w-md px-4' onSubmit={handleSubmit}>
        <StyledSelect
          label='Tipo de actividad'
          placeholder='Selecciona una actividad'
          name='activity'
          options={activitiesOptions}
          onChange={handleChange}
          value={formData.activity}
        />
        <StyledSelect
          name='operation'
          label='Operación'
          placeholder='Selecciona un tipo de operación'
          options={operations}
          onChange={handleChange}
          value={formData.operation}
        />
        <StyledSelect
          name='activo'
          label='Tipo de activo'
          placeholder='Selecciona un activo'
          options={activos}
          onChange={handleChange}
          value={formData.activo}
        />
        <StyledSelect
          name='crypto'
          label='Criptomoneda'
          placeholder='Selecciona una criptomoneda'
          options={cryptos}
          onChange={handleChange}
          value={formData.crypto}
        />
        <div className='flex flex-col mb-4 relative'>
          <p className='text-left mb-2'>Precio del activo</p>
          <input
            name='price'
            type='number'
            className='bg-white/20 border-none rounded-xl pl-8 pr-4 py-2'
            onChange={handleChange}
            value={formData.price}
          />
          <p className='absolute bottom-[5px] left-3 font-medium text-lg text-white/50'>$</p>
        </div>
        <div className='flex flex-col mb-4 relative'>
          <p className='text-left mb-2'>Tipo de cambio al momento de la compra</p>
          <input
            name='change'
            type='number'
            className='bg-white/20 border-none rounded-xl pl-8 pr-4 py-2'
            onChange={handleChange}
            value={formData.change}
          />
          <p className='absolute bottom-[5px] left-3 font-medium text-lg text-white/50'>$</p>
        </div>
        <button className='bg-white/40 border-none rounded-xl py-3 my-4 font-bold text-white/80'>Confirmar</button>
      </form>
    </div>
  )
}

export default FormScreen
