import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [fourSushis, setFourSushis] = useState([])

  useEffect(() => {
    fetch(API) 
    .then(res => res.json())
    .then(data => {
      const allSushis = data.map(s => ({...s, eaten: false}))  
      setSushis(allSushis)
      const four = sushis.splice(0, 4)
      setFourSushis(four)
    })
  }, [])  

  return (
    <div className="app">
      <SushiContainer fourSushis={fourSushis}/>
      <Table />
    </div>
  );
}

export default App;
