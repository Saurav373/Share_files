import React from 'react'
import '../Styles/SendEmail.css'
import { MdOutlineContentCopy } from "react-icons/md";
import toast from 'react-hot-toast';

const SendEmail = ({ downloadlink }) => {
    const handleSendEmail=(e)=>{
        e.preventDefault()
    }
    const CopyToClipboard = () => {
        navigator.clipboard.writeText(downloadlink)
        toast.success('Copied Successfully', { position: 'bottom-center' })
    }
    return (
        <>
            <span>Link expires in 24 hrs</span>
            <span className="link">
                <span className="text-container">{downloadlink}</span>
                <MdOutlineContentCopy className='copy-icon' onClick={CopyToClipboard} />
            </span>
            <div>
                OR Send Via Email ,
            </div>
            <div className='email-container'>
                <form onSubmit={handleSendEmail}>
                    <div className='input-area'>
                        <div className='input-field'>
                            <span>Your Email</span>
                            <input type="email" />
                        </div>
                        <div className='input-field'>
                            <span>Receiver Email</span>
                            <input type="email" />
                        </div>
                    </div>
                </form >
                    <div className="btn-cont">
                        <button className='button-global' type='submit'>Send Email</button>
                    </div>
            </div >
        </>
    )
}

export default SendEmail;
