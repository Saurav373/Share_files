import React, { Suspense, lazy } from 'react'
import Loader from './Loader'
const InputFile = lazy(() => import('./inputFile'))

const Home = () => {
  return (
    <>
      <img src="/logo.png" alt="logo" className='logo' />
      <div className="container">
        <Suspense fallback={<Loader />}>
          <InputFile />
        </Suspense>
        <img src="/undraw-upload.svg" alt="image" className='upload-image' draggable={false} />
      </div>
    </>
  )
}

export default Home
