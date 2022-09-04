import { ChakraProvider } from '@chakra-ui/react'
import { Toaster } from 'react-hot-toast'
import FormProvider from './context/FormContext'

export const Providers = ({ children }) => {
  return (
    <>
      <Toaster />
      <ChakraProvider>
        <FormProvider>
          {children}
        </FormProvider>
      </ChakraProvider>
    </>
  )
}
