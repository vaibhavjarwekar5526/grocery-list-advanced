import React from 'react';


const GroceryItem = ({grocery, id, handleDelete}) => {

  return (
    <div>
        <span>{grocery}</span>
        <button onClick={() => handleDelete(id)}>Delete Grocery</button>
    </div>
  )
}

export { GroceryItem };