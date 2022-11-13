import './App.css';
import React, {useState, useEffect} from 'react';
import { CalculatorLabel } from './Components/CalculatorLabel';
import { db } from './firebase.js';
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore';

import {cleanQuery} from './InputCleaner';
import {aggregateList} from './Aggregator';

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [input, setInput] = useState('');
  const term = input;

  const q=query(collection(db,'items'), where('name', '>=', cleanQuery(term)), where('name', '<=', cleanQuery(term) + '~'), orderBy('name'));
  useEffect(() => {onSnapshot(q,(snapshot)=>{setItems(snapshot.docs.map(doc=>doc.data()))})});

  const search=(e)=>{e.preventDefault(); setInput(input); setInput('')};
  return (
    <div className="App">
      <header className="App-header">
         <div className='categories'>
            <div className ="searchSection">
              <h1>What Are you in the Mood For?</h1>
              <form>
                <input value={input} onChange={e=>setInput(e.target.value)} />
              </form>
              <ul>{
              items.map(item => <p>
                Name: {item.name}, Energy: {item.energy}, <button onClick={() =>cart.push(item)}>Add to cart</button>
                </p>
                )
              }</ul>
            </div>
          </div>
          <div className="Cart">
          <ul>{
              cart.map(cartItem => <p>
                Name: {cartItem.name}, Energy: {cartItem.energy}, <button onClick={() => cart.pop(cartItem)}>Remove from cart</button>
                </p>
                )
              }</ul>
          </div>
          <div className="Calculator">
            <p>
              START SEARCH
              <br></br>
              {aggregateList(items)[1]}
              <br></br>
              END SEARCH
              <br></br>
              START CART
              <br></br>
              {aggregateList(cart)[1]}
              <br></br>
              END CART
            </p>
           <CalculatorLabel/>
          </div>
      </header>
    </div>
  );
}
export default App;
