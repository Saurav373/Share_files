import React from 'react'
import File_input from './FIle_input'

const Home = () => {
  return (
    <>
      <img src="/logo.png" alt="logo" className='logo'/>
      <div className="container">
        <File_input />
        <img src="/undraw-upload.svg" alt="image" className='upload-image' draggable={false} />
      </div>
    </>
  )
}

export default Home
