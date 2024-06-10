import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Loader from './Components/Loader.jsx'
const App = lazy(() => import('./App.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>
)
