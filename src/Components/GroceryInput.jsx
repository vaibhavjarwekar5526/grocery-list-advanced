import React, { useState } from 'react'

const GroceryInput = ({addGrocery}) => {
    const [grocery, setGrocery] = useState("");

  return (
    <div>
        <input 
        placeholder='Write Grocery Name' 
        onChange={(e)=> setGrocery(e.target.value)}
        value={grocery}
        />
        <button onClick={() => {
            addGrocery(grocery);
            setGrocery("");
        }}>Add Grocery</button>
    </div>
  )
}

export { GroceryInput };