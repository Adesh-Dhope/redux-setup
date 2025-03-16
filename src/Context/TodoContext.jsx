import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

const TodoData = createContext()

 const TodoContext = ({children}) => {

    const [ todoList, setTodoList] = useState([])

    useEffect(()=>{
       const FetchTodo = async ()=>{
        try{
            const response = await axios.get("https://dummyjson.com/products")
        if(response.status === 200){
            setTodoList(response.data.products)
        }else{
            console.error("Error occured while fetching data")
        }
        }catch(error){
            console.error("Error occured while fetching data", error)
        }finally{}
       }
       FetchTodo()
    },[])
  return (
<TodoData.Provider value={{todoList}}>
    {children}
</TodoData.Provider>
  )
}
export const useTodo = () => useContext(TodoData)
export default TodoContext