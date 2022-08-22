import { useContext } from 'react'
import { FormContext } from '../context/FormContext'
import FormScreen from '../screens/FormScreen'
import ResultsScreen from '../screens/ResultsScreen'
import Logo from '../logo.png'
import Spinner from '../components/Spinner/Spinner'
import { useNavigate } from 'react-router-dom'

function Calculator () {
  const { sent, loading } = useContext(FormContext)
  const navigate = useNavigate()
  return (
    <div className='flex flex-col font-inter text-white'>
      <img src={Logo} alt='Contcript logo' className='h-48 object-contain cursor-pointer' onClick={() => navigate('/')} />

      {loading && (
        <div className='flex justify-center'>
          <Spinner />
        </div>
      )}

      {!sent && !loading && <FormScreen />}
      {sent && !loading && <ResultsScreen />}
    </div>
  )
}

export default Calculator
