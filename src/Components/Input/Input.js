import React from 'react'
import './Input.css';

export default function Input({  placeholder, txt }) {
  return (
    <>
      <div className="input-box">
        <input type="text" placeholder={placeholder} />
        <input type="submit" value={txt} />
      </div>
    </>
  )
}
