import React, { useContext, useState } from 'react'
import { FormContext } from '../context/FormContext'
import Logo from '../logo.png'
import toCommas from '../helpers/toCommas'

function ResultsScreen() {
  const { formData, reset } = useContext(FormContext)

  const [division] = useState(parseInt(formData.price) / parseInt(formData.change))
  return (
    <div className='flex flex-col w-full max-w-lg px-4 mx-auto space-y-12'>
      <div className='flex flex-col space-y-2'>
        <h3 className='text-lg font-bold mb-2'>{formData.operation} de {formData.activo}</h3>
        <p className=''>Valor en {formData.crypto} del {formData.activo}: <span className='font-bold'>{division.toFixed(2)}</span></p>
        <p className=''>Tipo de cambio ({formData.crypto}) al momento de la {formData.operation}: <span className='font-bold'>${toCommas(formData.price)}</span></p>
        <p className=''>Valor de {formData.activo} en pesos mexicanos: <span className='font-bold'>${toCommas(formData.change)}</span></p>
      </div>
      <p className='text-sm text-white/40'>Nota: Los bienes adquiridos o servicios recibidos pagados con criptomonedas deben reconocerse a su costo de adquisición, el cual corresponde al valor razonable de las criptomonedas pagadas a la fecha de la transacción.</p>
      <button
        className="bg-white/40 border-none rounded-xl py-3 my-4 font-bold text-white/80"
        onClick={reset}
      >Volver</button>
    </div>
  )
}

export default ResultsScreen