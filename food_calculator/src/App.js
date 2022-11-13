import './App.css';
import React, {useState, useEffect} from 'react';
import { CalculatorLabel } from './Components/CalculatorLabel';
import { db } from './firebase.js';
import { collection, onSnapshot, query, orderBy, where, increment } from 'firebase/firestore';

import {cleanQuery} from './InputCleaner';
import {aggregateList} from './Aggregator';

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [input, setInput] = useState('');
  const term = input;

  const q=query(collection(db,'items'), where('name', '>=', cleanQuery(term)), where('name', '<=', cleanQuery(term) + '~'), orderBy('name'));
  useEffect(() => {onSnapshot(q,(snapshot)=>{setItems(snapshot.docs.map(doc=>doc.data()))})});


  // JAVASCRIPT IS EVIL I SHOULD NOT HAVE TO WRITE THIS FUNCTION BUT IT REFUSES
  function stringCompare(str1, str2){
    if(str1.length != str2.length){
      return false;
    }
    for(let x = 0; x < str1.length; x++){
      if(str1.charCodeAt(x) != str2.charCodeAt(x)){
        return false
      }
    }
    return true
  }

  // needed because of how quantity is stored - hackathon moment
  function findInCart(itemRef){
    for(let i = 0; i < cart.length; i++){
      if (stringCompare(cart[i][0].name, itemRef.name)){
        return i;
      }
    }
    return -1;
  }

  function addToCart(itemRef){
    let existingIndex = findInCart(itemRef)
    if (existingIndex >= 0){
      cart[existingIndex] = [itemRef, cart[existingIndex][1]+1]
    } else{
      cart.push([itemRef, 1])
    }
  }

  function removeFromCart(itemRef){
    let existingIndex = findInCart(itemRef)
    if (cart[existingIndex][1] > 1){
      cart[existingIndex] = [itemRef, cart[existingIndex][1]-1]
    } else{
      cart.splice(existingIndex, 1)
    }
  }

  function getItemStats(itemRef){
    return itemRef.protein + "g protein, " + itemRef.carbohydrate + "g carbohydrates, and " + itemRef.fat + "g fat per serving";
  }

  function exportCart(){
    let output = "Shopping list:\n";
    for(let x = 0; x < cart.length; x++){
      output += "(" + cart[x][1] + ") " + cart[x][0].name + "\n";
    }
    
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(output));
    element.setAttribute('download', "ShoppingList.txt");
  
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  const search=(e)=>{e.preventDefault(); setInput(input); setInput('')};
  return (
    <div className="App">
      <header className="App-header">
         <div className='categories'>
            <div className ="searchSection">
              <div className="header"><h1>What are you in the mood for?</h1></div>
              <div className="header"><input className="searchbar" value={input} onChange={e=>setInput(e.target.value)} /></div>
              <br></br>
              <div className='selection'>
                <ul>{
                items.map(item => <p className="item">
                <p className="itemText"> {item.name} 
                <p className="macro"> 
                Cal (kcal): {item.energy} &emsp; 
                Protein (g): {item.protein} &emsp; 
                Fat (g): {item.fat} &emsp; 
                Carbs (g): {item.carbohydrate}</p> 
                ${item.cost}
                <div className="buttonJustify"><button className="button" onClick={() =>addToCart(item)}>+</button></div>
                </p>
                </p>
                  )
                }</ul>
              </div>
            </div>
          </div>
          <div className="Calculator">
           <div className="Cart">
           <p className="totals">
              Total Cal (kcal): {aggregateList(cart, true)[0][0]}
              <br></br>
              Total Protein (g): {aggregateList(cart, true)[0][1]}
              <br></br>
              Total Fat (g): {aggregateList(cart, true)[0][3]}
              <br></br>
              Total Carbs (g): {aggregateList(cart, true)[0][2]}
              <br></br>
              Total Cost: {aggregateList(cart, true)[0][4]}
            </p>
            <p className="totals"><button className="export" onClick={() => exportCart()}>Export Shopping List</button></p>
            <div className="shoppingList"><h2>Shopping List</h2></div>
            <div className='cartModifiable'>
              <ul>{
                  cart.map(cartItem => <p className="item2">
                  <p className="itemText" title={getItemStats(cartItem[0])}>
                    {cartItem[0].name} &emsp; 
                    ${cartItem[0].cost}/serving &emsp; 
                    Count: {cartItem[1] } 
                    <div className="buttonJustify"><button className="button" onClick={() => removeFromCart(cartItem[0])}>-</button></div>
                  </p>
                  </p>
                    )
                  }</ul>
              </div>
            </div>
          </div>
      </header>
    </div>
  );
}
export default App;
