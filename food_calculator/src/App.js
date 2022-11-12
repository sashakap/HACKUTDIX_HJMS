import './App.css';
import React, {useState, useEffect} from 'react';
import { CalculatorLabel } from './Components/CalculatorLabel';
import { db } from './firebase.js';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

const q=query(collection(db,'items'),orderBy('name'));
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {onSnapshot(q,(snapshot)=>{setItems(snapshot.docs.map(doc=>doc.data()))})});
  return (
    <div className="App">
      <header className="App-header">
         <div className='categories'>
            <div className ="searchSection">
              <h1>What Are you in the Mood For?</h1>
              <input type="foodSearch" name="fname"></input>
              <searchvar></searchvar>
              <ul>{items.map(item => <li>Name: {item.name}, Energy: {item.energy}</li>)}</ul>
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
