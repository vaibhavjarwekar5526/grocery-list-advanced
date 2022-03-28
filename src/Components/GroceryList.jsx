import React from 'react'
import { GroceryItem } from './GroceryItem';

const GroceryList = ({data, handleDelete}) => {
  return (
    <div>
        {
          data.map((item) => (
            <GroceryItem {...item} key={item.id} handleDelete={handleDelete} />
          ))
        } 
    </div>
  )
}

export { GroceryList };