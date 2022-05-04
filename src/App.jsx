import { useContext, useState } from 'react'
import { activitiesOptions, activos, cryptos, operations } from './catalogos'
import StyledSelect from './components/StyledSelect'
import { FormContext } from './context/FormContext'
import FormScreen from './screens/FormScreen'
import ResultsScreen from './screens/ResultsScreen'
import Logo from './logo.png'
import Spinner from './components/Spinner/Spinner'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { sent, loading } = useContext(FormContext)

  return (
    <div className="flex flex-col font-inter text-white">
      <img src={Logo} alt="Contcript logo" className="h-48 object-contain" />
      
      {loading && (
        <div className='flex justify-center'>
          <Spinner />
        </div>
      )}

      {!sent && !loading && <FormScreen />}
      {sent && !loading && <ResultsScreen />}
      <ToastContainer />
    </div>
  )
}

export default App
