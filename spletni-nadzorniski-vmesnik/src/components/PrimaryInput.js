import React from 'react'

const PrimaryInput = ({type, placeholder, value, handlerFunction}) => {
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={e => handlerFunction(e.target.value)}/>
  )
}

export default PrimaryInput