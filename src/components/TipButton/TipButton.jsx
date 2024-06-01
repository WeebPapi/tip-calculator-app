import React from 'react'
import './TipButton.css'

const TipButton = ({val, buttonFunc}) => {
    const handleClick = () => {
        buttonFunc(val)
    } 
  return (
    <div className='tipbutton'>
        <button type='button' className='tipbutton-btn' onClick={handleClick}>{val}%</button>
    </div>
  )
}

export default TipButton