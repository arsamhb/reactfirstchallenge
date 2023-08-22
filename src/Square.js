import React from 'react'

function Square({color}) {
  return (
    <div className='square' style={{backgroundColor: `${color}`}}>
        <h2>{color ? color : "Empty"}</h2>
    </div>
  )
}

export default Square