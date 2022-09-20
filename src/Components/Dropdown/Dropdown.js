import React, { useState } from 'react';
import './Dropdown.css';
import Down from '../../Assets/SVG/down.svg';
import Up from '../../Assets/SVG/up.svg';

function Dropdown({ text, subtext }) {
  const [showSubText, toggleSubText] = useState(false);
  const [txtActive, setActive] = useState(false)
  const [desc, setDesc] = useState("dropdown-desc-none");
  function displayData() {
    toggleSubText(previousState => {
      // hidden
      if (previousState === false) {
        setDesc('dropdown-desc')
      } else {
        // showing
        setDesc("dropdown-desc-none")
      }
      setActive(prev => !prev)
      return !previousState
    })

  }
  return (
    <>
      <div className="dropdown-container">
        <div className="dropdown-body">
          <div className="dropdown-title">
            <p className={txtActive ? "dropdown-txt-active" : 'dropdown-txt'}>
              {text}
            </p>
            <div className="arrow">
              <img src={showSubText ? Up : Down } alt="" onClick={displayData} />
            </div>
          </div>
          <div className={desc}>
            <p className='dropdown-subtxt'>
              {showSubText && subtext}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dropdown