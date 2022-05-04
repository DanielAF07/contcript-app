import { createContext, useState } from "react"

export const FormContext = createContext()

const FormProvider = ({children}) => {
    const [formData, setFormData] = useState({
        activity: '',
        operation: '',
        activo: '',
        crypto: '',
        price: '',
        change: ''
    })

    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)

    const send = () => {
        setLoading(true)
        setTimeout(() => {
            setSent(true)
            setLoading(false)
        }, 2500)
    }

    const reset = () => {
        setFormData({
            activity: '',
            operation: '',
            activo: '',
            crypto: '',
            price: '',
            change: ''
        })
        setSent(false)
    }

    return (
        <FormContext.Provider value={{
            formData,
            sent,
            loading,
            setFormData,
            setSent,
            send,
            reset
        }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;