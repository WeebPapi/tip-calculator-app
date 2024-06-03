import React from 'react'
import './CalcScreen.css'

const CalcScreen = ({bill, tip, numPeople, setBill, setTip, setNumPeople}) => {
  const handleReset = () => {
    setBill('')
    setTip(0)
    setNumPeople(1)
  }
  const tipAmt = tip/100*bill 
  const total = bill + tipAmt
  const tipPerPerson = (tipAmt/parseInt(numPeople)).toFixed(2)
  const totalPerPerson = (total/parseInt(numPeople)).toFixed(2)
  return (
    <div className='calcscreen'>
      <div className='calcscreen__text'>
        <div className='calcscreen__text_tip'>
          <div className='calcscreen__text_tip-p'>
            <p className='toptext'>Tip Amount</p>
            <p className='perPerson'>/ person</p>
          </div>
          <p className='calcscreen__text-price'>${!isNaN(tipPerPerson)? tipPerPerson : '0.00'}</p>
        </div>
        <div className='calcscreen__text_person'>
          <div className='calcscreen__text_person-p'>
            <p className='toptext'>Total</p>
            <p className='perPerson'>/ person</p>
          </div>
          <p className='calcscreen__text-price'>${!isNaN(totalPerPerson)? totalPerPerson : '0.00'}</p>
        </div>
      </div>
      <div className='calcscreen__reset'>
        <button type='button' onClick={handleReset}>RESET</button>
      </div>
    </div>
  )
}

export default CalcScreen