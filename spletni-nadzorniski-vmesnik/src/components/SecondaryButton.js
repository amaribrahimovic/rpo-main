import React from 'react'

const SecondaryButton = ({children, handlerFunction, prop1, prop2, className}) => {
  return (
    <>
        <button type="submit" className={className} onClick={e => handlerFunction(e, prop1, prop2)}>{children}</button>
    </>
  )
}

export default SecondaryButton