import './App.css';
<<<<<<< HEAD
import { CalculatorLabel } from './Components/CalculatorLabel';
=======
import React, {useState, useEffect} from 'react';
import { CalculatorLabel } from './Components/CalculatorLabel';
import { db } from './firebase.js';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
>>>>>>> a77065f7b880a2b1f079c4042be703720fbfbfc8

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
<<<<<<< HEAD
              <div className='searchbar'>
                <input type="text" className="foodSearch"></input>
                <button className='searchButton'></button>
              </div>
=======
              <input type="foodSearch" name="fname"></input>
              <searchvar></searchvar>
              <ul>{items.map(item => <li>Name: {item.name}, Energy: {item.energy}</li>)}</ul>
>>>>>>> a77065f7b880a2b1f079c4042be703720fbfbfc8
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
