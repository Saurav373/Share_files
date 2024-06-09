import React, { useEffect, useState } from 'react'
import '../Styles/DownloadPage.css'
import { useParams } from 'react-router-dom'
import PageNotFound from './PageNotFound'

const DownloadPage = () => {
  const { uniqueId } = useParams()
  const [fileData, setfileData] = useState({})

  const getFileInfo = async () => {
    try {

      let response = await fetch('http://localhost:3000/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ uniqueId })
      });
      response = await response.json();
      setfileData(response)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getFileInfo()
  }, [])

  return (
    <>{
      !fileData.status ? <PageNotFound /> :
        <div className='download-container' >
          <img src="/download.svg" alt="download-image" className='download-image' />
          <div className="content">
            <h2>Your File is ready to Download</h2>
            <span>Link Expires in 24hrs</span>
            <span>Index.html</span>
            <span>Size : 100kb</span>
          </div>
          <button type="button" className="button">Download File</button>
        </div>
    }
    </>
  )
}

export default DownloadPage
