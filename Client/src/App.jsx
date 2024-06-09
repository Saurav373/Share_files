import './App.css'
import DownloadPage from './Components/DownloadPage';
import { Toaster } from 'react-hot-toast';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'


function App() {

  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/download/:uniqueId" element={<DownloadPage />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
