import './App.css';
import { CalculatorLabel } from './Components/CalculatorLabel';
import React, {useState, useEffect} from 'react';
import { db } from './firebase.js';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';



const q=query(collection(db,'items'),orderBy('name'));
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {onSnapshot(q,(snapshot)=>{setItems(snapshot.docs.map(doc=>doc.data()))})});
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Commissioner:wght@100&family=Maven+Pro&display=swap');
      </style>
      <header className="App-header">
         <div className='categories'>
            <div className ="searchSection">
              <h1>What Are you in the Mood For?</h1>
              <div className='searchbar'>
                <input type="text" className="foodSearch"></input>
              </div>
              <searchbar></searchbar>
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
