import React from 'react'
import './Button.css'

export default function Button({Text, className}) {
  return (
    <div>
      <button className={className}>
        {Text}
      </button>
    </div>
  )
}
