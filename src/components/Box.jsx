import React from 'react'
import './Box.css'

const Box = ({ text, number }) => {
  return (
    <div className='box'>
      <h2>{number}</h2>
      <p>{text}</p>
    </div>
  )
}

export default Box
