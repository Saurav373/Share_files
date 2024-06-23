import React, { Suspense, lazy } from 'react'
import Loader from './Loader'
const File_input = lazy(() => import('./FIle_input.'))

const Home = () => {
  return (
    <>
      <img src="/logo.png" alt="logo" className='logo' />
      <div className="container">
        <Suspense fallback={<Loader />}>
          <File_input />
        </Suspense>
        <img src="/undraw-upload.svg" alt="image" className='upload-image' draggable={false} />
      </div>
    </>
  )
}

export default Home
