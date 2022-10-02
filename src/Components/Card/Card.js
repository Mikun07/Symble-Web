import React from 'react'
import './Card.css';

function Card({ Number, Title, Subtxt, Pic, Switch }) {
  return (
    <>
      {Switch ?
        <div className="card-container">
          <div className="card-img">
            <img src={Pic} alt="" />
          </div>
          <div className="card-txt">
            <h3 className='card-number'>
              {Number}
            </h3>
            <h6 className='card-title'>{Title}</h6>
            <p className='card-subtxt'>{Subtxt}</p>
          </div>
        </div>
        :
        <div className="card-container">
          <div className="card-txt">
            <h3 className='card-number'>
              {Number}
            </h3>
            <h6 className='card-title'>{Title}</h6>
            <p className='card-subtxt'>{Subtxt}</p>
          </div>
          <div className="card-img">
            <img src={Pic} alt="" />
          </div>
        </div>
      }
    </>
  )
}

export default Card