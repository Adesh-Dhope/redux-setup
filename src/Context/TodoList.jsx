import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchtodo } from '../redux/slices/TodoSlice';

const TodoList = () => {
    const dispatch = useDispatch();
    const {items} = useSelector((state => state.todo));
console.log('items todo',items)
    useEffect(()=>{
  dispatch(fetchtodo())
    },[dispatch])

    const [todoData, setTodoData] = useState([]);
console.log('todoData',todoData)
    useEffect(()=>{
setTodoData(items)
    },[items])

    const centeredStyle = {
      display: "flex",
      justifyContent: "center", // Centers horizontally
      alignItems: "center", // Centers vertically
      height: "100vh", // Full viewport height
      marginTop:"5em"
    };
  return (
    <div>
      <h2 style={{textAlign:'center'}}>TodoList</h2>

<div style={centeredStyle}>
  <table>
    <thead>
      <tr>
        <th style={{padding:"2px"}}>Sr.No</th>
        <th style={{padding:"2px"}}>Todo</th>
        <th style={{padding:"2px"}}>Status</th>
      </tr>
    </thead>
    <tbody>
      {todoData.map((data, index)=>(

      <tr>
        <td style={{padding:"2px"}}>{index + 1}</td>
        <td style={{padding:"2px"}}>{data.todo}</td>
        <td style={{padding:"2px"}}>{data.completed ? "Done" : "In Progress"}</td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  )
}

export default TodoList