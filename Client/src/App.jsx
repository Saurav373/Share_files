import './App.css'
import File_input from './Components/FIle_input'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    <Toaster/>
      <img src="/logo.png" alt="logo" className='logo'/>
      <div className="container">
        <File_input />
        <img src="/undraw-upload.svg" alt="image" className='upload-image' draggable={false} />
      </div>
    </>
  )
}

export default App
