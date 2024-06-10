import React from 'react'
import '../Styles/PageNotFound.css'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='page-not-found-box'>
            <h1>404</h1>
            <h1>
                Page Not Found
            </h1>
            <h3>Invalid Url , Please try using a valid url OR <Link to='/'> visit to our website</Link></h3>
        </div>
    )
}

export default PageNotFound
