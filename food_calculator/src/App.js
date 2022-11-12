import './App.css';
<<<<<<< HEAD
import { CalculatorLabel } from './Components/CalculatorLabel';
=======
import { db } from './firebase.js';
import { collection , onSnapshot } from 'firebase/firestore';
>>>>>>> c75219332859accea464180f8b0e68e945ba2d09

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <div className='categories'>
            <div className ="searchSection">
              <h1>What Are you in the Mood For?</h1>
              <input type="foodSearch" name="fname"></input>
              <searchvar></searchvar>
            </div>
          </div>
          <div className="Calculator">
           <CalculatorLabel/>
          </div>
      </header>
    </div>
  );
}

export default App;
