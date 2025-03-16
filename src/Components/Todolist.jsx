import React, {  useEffect, useState } from 'react'
import { useTodo } from '../Context/TodoContext'

const Todolist = () => {

  const {todoList} = useTodo()

  const [useData, setUseData] = useState([])
console.log("useData",useData)
  useEffect(()=>{
setUseData(todoList)
  },[todoList])

  return (
    <div style={{alignContent:'center', textAlign:'center', paddingTop:'2em', paddingBottom:'2em'}}><h2>Todolist</h2>
<div style={{
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  alignItems: 'center', 

}}>
<table border={1} style={{textAlign:'center'}}>
  <thead>
    <tr>
      <th>Sr.No</th>
      <th>Brand</th>
      <th>Category</th>
      <th>SKU</th>
      <th>Availability Status</th>
      <th>Discount %</th>
      <th>Ratings</th>
      <th>Warranty</th>
    </tr>
  </thead>
  <tbody>
    {useData.map((data, index)=>(
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{data.brand}</td>
        <td>{data.category}</td>
        <td>{data.sku}</td>
        <td>{data.availabilityStatus}</td>
        <td>{data.discountPercentage}</td>
        <td>{data.rating}</td>
        <td>{data.warrantyInformation}</td>
      </tr>
    ))}
  </tbody>
</table>
  
</div>
    </div>
  )
}

export default Todolist