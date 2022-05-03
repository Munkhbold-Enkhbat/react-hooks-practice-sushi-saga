import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({fourSushis}) {
    
  const sushiList = fourSushis.filter(s => !s.eaten).map(s => {
    return <Sushi sushi={s}/>
  })

  return (
    <div className="belt">
      {sushiList}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
