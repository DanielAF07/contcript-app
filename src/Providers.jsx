import { ChakraProvider } from '@chakra-ui/react'
import { Toaster } from 'react-hot-toast'
import FormProvider from './context/FormContext'
import WalletProvider from './context/WalletContext'

export const Providers = ({ children }) => {
  return (
    <>
      <Toaster />
      <ChakraProvider>
        <WalletProvider>
          <FormProvider>
            {children}
          </FormProvider>
        </WalletProvider>
      </ChakraProvider>
    </>
  )
}
