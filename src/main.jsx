import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './routes/Router'
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<Router />)
