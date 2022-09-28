import React from 'react';
import './Rscard.css';

function Rscard({Number, Title, Subtxt, Pic}) {
  return (
    <>
    <div className="rscard-container">
          <div className="rscard-img">
            <img src={Pic} alt="" />
          </div>
          <div className="rscard-txt">
            <h3 className='rscard-number'>
              {Number}
            </h3>
            <h6 className='rscard-title'>{Title}</h6>
            <p className='rscard-subtxt'>{Subtxt}</p>
          </div>
        </div>
    </>
  )
}

export default Rscard
