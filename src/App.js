import './App.css';
import React from 'react';
import {TipButton, CalcScreen} from './components'

function App() {
  const [bill, setBill] = React.useState(0)
  const [tip, setTip] = React.useState(0)
  const [numPeople, setNumPeople] = React.useState('')
  const [isInvalid, setIsInvalid] = React.useState(false)
  const validationStyle = {
    fontSize: '16px',
    color: 'rgba(225, 116, 87, 1)',
    position: 'absolute',
    margin: '0',
    bottom: '3rem',
    left: '16.8rem',
    width: 'max-content',
    fontWeight: '700',
    fontFamily: 'Space Mono'
  }
  const handlePplChange = (e) => {
    if (parseInt(e.target.value) === 0){
      setIsInvalid(true)
    }
    else {
      setIsInvalid(false)
      setNumPeople((e.target.value))
    }
  }

  return (
    <div className="App flex__center">
      <div className='app__wrapper flex__center'>
        <div className='app__inputs'>
          <form>
            <div className='app__inputs-bill'>
              <label for='bill'>Bill</label><br/>
              <input type='text' name='bill' placeholder='0' onChange={(e) => (setBill(parseFloat(e.target.value)))}></input>
            </div>
            <div className='app__inputs-buttons'>
              <p>Select Tip %</p>
              <div className='app__inputs-buttons-container'>
              {[5, 10, 15, 25, 50].map((num, index) => (
                <TipButton val={num} buttonFunc={setTip} key={index} />
              ))}
                <input onChange={(e) => (
                  setTip(parseFloat(e.target.value))
                )} type='text' name='custom' placeholder='Custom'></input>
              </div>
            </div>
            <div className='app__inputs-ppl' style={{position: 'relative'}}>
            <label for='ppl'>Number of People</label><br/>
                {isInvalid ? <p style={validationStyle}>Can't be zero</p> : null}
              <input type='text' value={numPeople} id='ppl' name='ppl' placeholder='0' onChange={handlePplChange} style={{border: isInvalid ? '1px solid rgba(225, 116, 87, 1)'
 : 'inherit'}}></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
