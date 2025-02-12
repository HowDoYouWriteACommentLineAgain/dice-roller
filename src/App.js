import Dice from './Dice';
import {useState} from 'react';
import './App.css';

function App() {
  const [currentRolls, setCurrRolls] = useState([0,0,0]);

  function rollDices(){
    const newRolls = currentRolls.map(()=>Math.round(Math.random()*6+1));
    setCurrRolls(newRolls);
    console.log({currentRolls});
  }

  
  return (
    <span className="App">

      <button onClick={()=>rollDices()}>Roll Dices</button>
      <Dice face={currentRolls[0]}/>
      <Dice face={currentRolls[1]}/>
      <Dice face={currentRolls[2]}/>
    </span>
  );
}

export default App;
