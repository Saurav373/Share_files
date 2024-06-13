import React, { useEffect, useRef, useState } from 'react'
import '../Styles/SendEmail.css'
import { MdOutlineContentCopy } from "react-icons/md";
import toast from 'react-hot-toast';
import { ValidateEmail } from '../Controllers/ValidateEmail';
import { SendEmailfn } from '../Controllers/SendEmail.js'

const SendEmail = ({ downloadlink }) => {
    const senderEmail = useRef(null)
    const receiverEmail = useRef(null)
    const [isLoading, setIsloading] = useState(false)
    const [timer, settimer] = useState(false)
    const [timervalue, setTimervalue] = useState(60)

    const handleSendEmail = async () => {

        const data = {
            senderEmail: senderEmail.current.value,
            receiverEmail: receiverEmail.current.value
        }
        const isValidate = ValidateEmail(data)
        if (!isValidate) {
            toast.error('Invalid Email', { position: 'bottom-center' })
            return;
        }
        setIsloading(true)
        const Emailresult = SendEmailfn(data.senderEmail, data.receiverEmail, downloadlink)
        setIsloading(false)
        if (!Emailresult) {
            toast.error('Error in sending Email', { position: 'bottom-center' })
        } else {
            toast.success('Email sent successfully')
            settimer(true)

        }

    }
    useEffect(() => {
        if (!timer) return;
        let interval = setInterval(() => {
            setTimervalue(prevtimer => {
                if (prevtimer <= 0) {
                    settimer(false)
                    clearInterval(a)
                    return 60
                }
                return prevtimer - 1
            })
        }, 1000);
        return () => clearInterval(interval)
    }, [timer])


    const CopyToClipboard = () => {
        navigator.clipboard.writeText(downloadlink)
        toast.success('Copied Successfully', { position: 'bottom-center' })
    }
    return (
        <>
            <span>Link expires in 48 hrs</span>
            <span className="link">
                <span className="text-container">{downloadlink}</span>
                <MdOutlineContentCopy className='copy-icon' onClick={CopyToClipboard} />
            </span>
            <div>
                OR Send Via Email ,
            </div>
            <div className='email-container'>
                <div className='input-area'>
                    <div className='input-field'>
                        <span>Your Email</span>
                        <input type="email" ref={senderEmail} />
                    </div>
                    <div className='input-field'>
                        <span>Receiver Email</span>
                        <input type="email" ref={receiverEmail} />
                    </div>
                </div>
                <div className="btn-cont">
                    <button className={`button-global ${(isLoading || timer) && 'btn-disabled'}`} id='send-email-btn' type='submit' onClick={handleSendEmail} disabled={isLoading || timer}>
                        {!timer ? (isLoading ? <><BtnLoader /><span>Sending Email</span></> : 'Send Email') : <>
                            Resend in {timervalue}
                        </>}
                    </button>

                </div>
            </div >
        </>
    )
}
const BtnLoader = () => {
    return (
        <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
        </svg>
    )
}
export default SendEmail;
