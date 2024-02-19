import React from 'react'

const PrimaryButton = ({handlerFunction, prop1, prop2, prop3}) => {
  return (
    <>
        {prop3 ? <button type="submit" className="register-button" onClick={e => handlerFunction(e, prop1, prop2)}>Login</button> : <button type="submit" className="register-button" onClick={() => handlerFunction(prop1, prop2)}>Login</button>}
    </>
  )
}

export default PrimaryButton