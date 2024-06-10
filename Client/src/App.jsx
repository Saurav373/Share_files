import './App.css'
import { Toaster } from 'react-hot-toast';
import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Loader from './Components/Loader';

const Home = lazy(() => import('./Components/Home'))
const DownloadPage = lazy(() => import('./Components/DownloadPage'))
const PageNotFound = lazy(() => import('./Components/PageNotFound'))


function App() {

  return (
    <>
      <Toaster />
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/download/:uniqueId" element={<DownloadPage />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
