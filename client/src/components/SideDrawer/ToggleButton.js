import React from 'react'
import './ToggleButton.css'


const ToggleButton = ({ click }) => (
    <button 
        className='toggle-button'
        onClick={click}    
    >
        <div className='toggle-button__line' />
        <div className='toggle-button__line' />
        <div className='toggle-button__line' />
    </button>
)


export { ToggleButton }
