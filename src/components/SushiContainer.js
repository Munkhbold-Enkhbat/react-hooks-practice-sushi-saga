import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ api }) {

  const [sushiList, setSushiList] = useState([])

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => setSushiList(data))
  }, [])

  function renderSushis() {
    return sushiList.map(sushi => {
      return <Sushi sushi={sushi}/>
    })
  }

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
