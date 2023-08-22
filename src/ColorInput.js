import React from 'react'

function ColorInput({color,setColor}) {
  return (
    <form>
        <input  
            className='input-color'
            type="text" 
            onChange={(e) => setColor(e.target.value)}
            value={color}/>
    </form>
  )
}

export default ColorInput