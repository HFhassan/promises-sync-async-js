import React , {useState, useEffect} from 'react';


const [data, setData] = useState({});

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  .then(json =>{
      setData(json)
  })
},[])

return (
    <h1>{data.title}</h1>
)

