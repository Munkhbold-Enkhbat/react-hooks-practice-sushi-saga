import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [fourSushis, setFourSushis] = useState([])
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
    console.log(e.target);
    // fourSushis.filter(s => s.id)
  }

  return (
    <div className="app">
      <SushiContainer fourSushis={fourSushis} getSushis={getSushis} handleSushiClick={handleSushiClick}/>
      <Table sushis={sushis} budget={budget}/>
    </div>
  );
}

export default App;
