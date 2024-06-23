import '../Styles/UploadProgress.css'

const UploadProgress = ({uploadprecent}) => {
    return (
        <>
            <div className='upload-progress'>
                <div>
                    <span>Uploading...</span>
                    <span>{uploadprecent.toFixed(2)}%</span>
                    <div style={{ width: `${uploadprecent}%` }} className='upload-line'></div>
                </div>
                <div style={{ width: uploadprecent }} className='upload-bar'></div>
            </div>
        </>
    )
}

export default UploadProgress
