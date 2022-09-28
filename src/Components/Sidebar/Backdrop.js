import React from 'react'
import './Sidebar.css';

function Backdrop({sidebar}) {
  return (
    <>
        <div className={sidebar? "backdrop backdrop--open": "backdrop"}>

        </div>
    </>
  )
}

export default Backdrop