import React, { useEffect, useState, lazy, Suspense } from 'react'
import '../Styles/DownloadPage.css'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

const PageNotFound = lazy(() => import('./PageNotFound'))

const DownloadPage = () => {

  const { uniqueId } = useParams()
  
  const [fileData, setfileData] = useState({})
  const [isLoading,setisLoading] = useState(true)

  const getFileInfo = async () => {
    try {
      let response = await fetch('https://inshare-3nn5.onrender.com/fileinfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ uniqueId })
      });
      response = await response.json();
      setfileData(response)
      setisLoading(false)
    } catch (err) {
      console.log(err);
    }
  }
  const handleDownload = async () => {
    try {
      const response = await fetch(`https://inshare-3nn5.onrender.com/download/${uniqueId}`);
      if (!response.ok) {
        throw new Error('Failed to download file');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileData.originalname;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading file:', error);

    }
  }
  useEffect(() => {
    getFileInfo()
  }, [])

  return (
    <>
      <Suspense fallback={<Loader />}>
        {
          !isLoading && (!fileData.status ? <PageNotFound /> :
            <div className='download-container' >
              <img src="/download.svg" alt="download-image" className='download-image' />
              <div className="content">
                <h2>Your File is ready to Download</h2>
                <span>Link Expires in {fileData.expireTimer} hrs</span>
                <span>{fileData.originalname}</span>
                <span>Size : {fileData.size/1000}kb</span>
              </div>

              <button type="button" style={{
                position: 'absolute',
                bottom: '5%'
              }} className="button-global" onClick={handleDownload}>Download File
              </button>
            </div>)
        }
      </Suspense>
    </>
  )
}

export default DownloadPage
