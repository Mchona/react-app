import React from 'react'
import "./Child.css"

const Child = ({num}) => {
  return (
    <div>
      <h3>HelloChild</h3>
      <h3>{ num }</h3>
    </div>

  )
}

export default  Child
