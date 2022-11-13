import React from 'react';
import './CalculatorLabel.css';
//import { Link } from 'react-router-dom';

export function CalculatorLabel() {
  return (
    <div className='calculatorLabels'>
        <h1 className='itemLabel'>Item</h1>
        <h1 className='itemLabel'>Energy</h1>
        <h1 className='itemLabel'>Quantity</h1>
        <h1 className='itemLabel'>Count</h1>
    </div>
  );
}
