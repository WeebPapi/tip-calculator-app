import './App.css';
import React from 'react';
import {TipButton, CalcScreen} from './components'

function App() {
  const [bill, setBill] = React.useState(0)
  const [tip, setTip] = React.useState(0)
  const [numPeople, setNumPeople] = React.useState(1)
  const handlePplChange = (e) => {
    if (parseInt(e.target.value) === 0){
      e.target.style.border = '2px solid red'
    }
    setNumPeople(parseInt(e.target.value))
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
            <div className='app__inputs-ppl'>
              <p>{tip}</p>
            <label for='ppl'>Number of People</label><br/>
                
              <input type='text' id='ppl' name='ppl' placeholder='0' onChange={handlePplChange}></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
