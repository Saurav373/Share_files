import React, { Suspense, lazy } from 'react'
import Loader from './Loader'
<<<<<<< HEAD
const inputFile = lazy(() => import('./inputFile'))
=======
const File_input = lazy(() => import('./FIle_input.'))
>>>>>>> 03233064bdd47dc25604cc0f09b283d81ee3e416

const Home = () => {
  return (
    <>
      <img src="/logo.png" alt="logo" className='logo' />
      <div className="container">
        <Suspense fallback={<Loader />}>
          <inputFile />
        </Suspense>
        <img src="/undraw-upload.svg" alt="image" className='upload-image' draggable={false} />
      </div>
    </>
  )
}

export default Home
