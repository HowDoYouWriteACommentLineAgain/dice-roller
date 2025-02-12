import Dice from './Dice';
import {useState} from 'react';
import './App.css';

function App() {
  const [currentRolls, setCurrRolls] = useState([0,0,0]);
  const [pastRolls, setPastRolls] = useState([]);

  function rollDices(){
    const newRolls = currentRolls.map(()=>Math.round(Math.random()*6+1));
    setCurrRolls(newRolls);
    
    const addingPastRolls = [...pastRolls, newRolls];
    setPastRolls(addingPastRolls);
    console.clear();
    console.log({currentRolls});
    console.table({pastRolls});
  }

  
  return (
    <span className="App">

      <button onClick={()=>rollDices()}>Roll Dices</button>
      <Dice face={currentRolls[0]}/>
      <Dice face={currentRolls[1]}/>
      <Dice face={currentRolls[2]}/>
      <h3>Past Dice Rolls</h3>
      <ul>
        {
          pastRolls.map(
            (currElem, index) => {
              return <li key={index}>{currElem},</li>
            }
          )
        }
      </ul>
    </span>
  );
}

export default App;
