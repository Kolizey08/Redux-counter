import React from 'react'
import { useSelector } from 'react-redux'
import './styles.css'

function Number() {
    const num = useSelector((state) => {
return state.number
    })
 console.log(num);
    return (
    <div className='div1'>{num}</div>
  )
}

export default Number