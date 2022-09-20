import React from 'react';
import './Label.css';

function Label({ Txt, types,}) {
  return (
    <>
      <div className="label-container">
        <label className='label-style'>
          {Txt}
        </label>
        <input className='label-input' type={types}/>
      </div>
    </>
  )
}

export default Label