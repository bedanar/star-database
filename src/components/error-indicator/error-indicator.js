import React from 'react'
import './error-indicator.css'

const ErrorIndicator = () => {
    return(
        <div className="error-indicator">
            <span className="boom">Boom</span>
            <span className="">Something has gone wrong</span>
            <span className="">But we are already fixing it</span>
        </div>
    )
}
export default ErrorIndicator