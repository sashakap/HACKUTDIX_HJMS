import './App.css';
import React, {useState, useEffect} from 'react';
import { CalculatorLabel } from './Components/CalculatorLabel';
import { db } from './firebase.js';
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');
  const term = "";
  const q=query(collection(db,'items'),where('name', '>=', term), where('name', '<=', term + '~'), orderBy('name'));
  useEffect(() => {onSnapshot(q,(snapshot)=>{setItems(snapshot.docs.map(doc=>doc.data()))})});
  return (
    <div className="App">
      <header className="App-header">
         <div className='categories'>
            <div className ="searchSection">
              <h1>What Are you in the Mood For?</h1>
              <input type="foodSearch" name="fname"></input>
<<<<<<< HEAD
              <searchbar></searchbar>
              <ul>{items.map(item => <li>Name: {item.name}, Energy: {item.energy}</li>)}</ul>
=======
              <searchvar></searchvar>
              <ul>{items.map(item => <p>Name: {item.name}, Energy: {item.energy}</p>)}</ul>
>>>>>>> 5a24985e1a4a50da947745b4d7f1cd5ae28b99b1
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
