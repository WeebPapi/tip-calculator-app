import "./App.css"
import React from "react"
import { TipButton, CalcScreen } from "./components"

function App() {
  const [bill, setBill] = React.useState("")
  const [tip, setTip] = React.useState(0)
  const [numPeople, setNumPeople] = React.useState(1)
  const [isInvalid, setIsInvalid] = React.useState(false)

  const handlePplChange = (e) => {
    if (parseInt(e.target.value) === 0) {
      setIsInvalid(true)
    } else {
      setIsInvalid(false)
      setNumPeople(e.target.value)
    }
  }

  return (
    <div className="App flex__center">
      <div className="app__wrapper flex__center">
        <div className="app__inputs">
          <form>
            <div className="app__inputs-bill">
              <label for="bill">Bill</label>
              <br />
              <input
                value={isNaN(bill) ? "0" : bill}
                type="text"
                name="bill"
                placeholder="0"
                onChange={(e) => setBill(e.target.value)}
              ></input>
            </div>
            <div className="app__inputs-buttons">
              <p>Select Tip %</p>
              <div className="app__inputs-buttons-container">
                {[5, 10, 15, 25, 50].map((num, index) => (
                  <TipButton val={num} buttonFunc={setTip} key={index} />
                ))}
                <input
                  onChange={(e) => setTip(parseFloat(e.target.value))}
                  type="text"
                  name="custom"
                  placeholder="Custom"
                ></input>
              </div>
            </div>
            <div className="app__inputs-ppl" style={{ position: "relative" }}>
              <label for="ppl">Number of People</label>
              <br />
              {isInvalid ? <p className="validation-p">Can't be zero</p> : null}
              <input
                type="text"
                value={numPeople}
                id="ppl"
                name="ppl"
                placeholder="0"
                onChange={handlePplChange}
                style={{
                  border: isInvalid
                    ? "1px solid rgba(225, 116, 87, 1)"
                    : "inherit",
                }}
              ></input>
            </div>
          </form>
        </div>
        <div className="app__calc">
          <CalcScreen
            bill={bill}
            setBill={setBill}
            tip={tip}
            setTip={setTip}
            numPeople={numPeople}
            setNumPeople={setNumPeople}
          />
        </div>
      </div>
    </div>
  )
}

export default App
