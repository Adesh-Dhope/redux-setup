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
  return (
    <div>
      <h2>TodoList</h2>

    </div>
  )
}

export default TodoList