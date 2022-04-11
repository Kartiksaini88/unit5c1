import { useState } from "react";
// import `src/App.css`
import './App.css';
var  count = 0
function App() {


 let [all,chngall] = useState({Score:76,Wicket:2,Ball:50})


let addscore = (value)=>{
  chngall({Score:all.Score+value,Wicket:all.Wicket,Ball:all.Ball})
}

let addWicket = (value)=>{
 
  if(all.Wicket>=12){
    return
  }else{
    chngall({Score:all.Score,Wicket:all.Wicket+value,Ball:50})
  }
  
}


let addball = (value)=>{
 
  if(count === 5){
    chngall({Score:all.Score,Wicket:all.Wicket,Ball:all.Ball+value+0.4})
    count = 0
    console.log(value,count)
  }
  else{
    chngall({Score:all.Score,Wicket:all.Wicket,Ball:all.Ball+value})
    count = count + 1
    console.log(value,count)
  }
  }
  

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{""}
          <h1 className="scoreCount">
            {
              // show "score" here
              all.Score
            }
          </h1>
        </div>
        <div>
          Wicket:{""}
          <h1 className="wicketCount">
            {
              // show wicket here
              all.Wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              all.Ball.toFixed(1)
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{addscore(1)}}>Add 1</button>
        <button className="addScore4" onClick={()=>{addscore(4)}}>Add 4</button>
        <button className="addScore6" onClick={()=>{addscore(6)}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{addWicket(1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{addball(0.1)}}>Add 1</button>
      </div>

      <h1>{all.Score > 100 ? "India won":" "}</h1>
    </div>
  );
}

export default App;

