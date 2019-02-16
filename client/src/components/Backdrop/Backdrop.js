import React from 'react'
import './Backdrop.css'


const Backdrop = ({ click }) => (
    <div 
        className='backdrop' 
        onClick={click}
    />
)


export { Backdrop }
