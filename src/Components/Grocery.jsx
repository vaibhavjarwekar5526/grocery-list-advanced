import React, { useState } from 'react'
import { GroceryInput } from './GroceryInput';
import { GroceryList } from './GroceryList';

const Grocery = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState("");

    
    const getGrocery = () => {
        fetch(`http://localhost:3001/groceries?_page=${page}&_limit=5`)
        .then((res) => {
            setTotal(+res.headers.get("X-Total-Count"));
            return res.json();
        })
        .then((res) => {
            setData(res);
        })
    }


    React.useEffect( getGrocery, [page]);

    const addGrocery = (grocery) =>{
        if(grocery.length){
            const payload = {
                grocery
            }

            const payloadjson = JSON.stringify(payload);

            fetch(`http://localhost:3001/groceries`,{
                method: "POST",
                body: payloadjson,
                headers: {
                    "content-type": "application/json"
                }
            })
            .then((res) => {
                res.json();
            })
            .then((res) => {
                getGrocery();
            })
        }
    }
   

    const handleDelete = (id) => {
        
        fetch(`http://localhost:3001/groceries/${id}`,{
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
        .then((res) => {
            res.json();
        })
        .then((res) => {
            getGrocery();
        })
    }
    
  return (
    <div>
        <h1>Grocery List Management Application</h1>
        <GroceryInput addGrocery={addGrocery} />
        <GroceryList data={data} handleDelete={handleDelete}/>
        <button onClick={() => setPage(page-1)} disabled={page===1}>PREV</button>
        <button onClick={() => setPage(page+1)} disabled={page>=Math.ceil(total/5)}>NEXT</button>
    </div>
  )
}

export { Grocery };