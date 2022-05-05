import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [fourSushis, setFourSushis] = useState([])
  const [eatenSushis, setEatenSushis] = useState([])
  const [budget, setBudget] = useState(100)  

  useEffect(() => {
    fetch(API) 
    .then(res => res.json())
    .then(data => {
      const allSushis = data.map(s => ({...s, eaten: false}))  
      setSushis(allSushis)
      const four = allSushis.splice(0, 4)
      setFourSushis(four)
    })
  }, [])  

  function getSushis() {
    const nextFourSushis = sushis.splice(0, 4)
    setFourSushis(nextFourSushis)
  }

  function handleSushiClick(e) {     
    const eatenSushi = fourSushis.find(s => s.id === parseInt(e.target.id)) 
    // debugger
    if(eatenSushi.price <= budget) {
      eatenSushi.eaten = true
      const emptyPlate = [...eatenSushis, eatenSushi]
      setEatenSushis(emptyPlate)
      const newBudget = budget - eatenSushi.price
      setBudget(newBudget)     
    } else {
      return 
    }  
  }

  return (
    <div className="app">
      <SushiContainer fourSushis={fourSushis} getSushis={getSushis} handleSushiClick={handleSushiClick}/>
      <Table sushis={sushis} budget={budget} eatenSushis={eatenSushis}/>
    </div>
  );
}

export default App;
