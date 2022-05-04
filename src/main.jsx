import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FormProvider from './context/FormContext'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </ChakraProvider>
  </React.StrictMode>
)