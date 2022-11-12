import './App.css';
import { CalculatorLabel } from './Components/CalculatorLabel';

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
