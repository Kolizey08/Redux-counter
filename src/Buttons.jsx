import React from 'react'
import { useDispatch } from 'react-redux'
import './styles.css'

function Buttons() {
    const dispach = useDispatch()
    const handleInc = () => {
        dispach({type: 'plus'})
    }

    const hadleDec = () => {
        dispach({type: 'minus'})
    }
  return (
      <div className='div2'>
      <button className='btn' onClick={hadleDec}>-</button>
        <button className='btn' onClick={handleInc}>+</button>
    </div>

  )
}

export default Buttons