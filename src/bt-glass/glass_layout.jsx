import React,{useState} from 'react'
import TodoItem from './TodoItem'


export default function GlassLayout() {
  const [todos,setTodos] = useState([
    {id:1,name:"Do Homework",time:"15 min", isComplete:true},
    {id:2,name:"Play Badminton",time:"30 min", isComplete:false},
    {id:3,name:"Sleep",time:"8 hours", isComplete:true},

  ])

  const [inputValue,setInputValue] = useState("")


  const handleRemoveTodo = (id)=>{
    const newTodos = todos.filter((item)=>{
      return item.id !== id
    })
    setTodos(newTodos)
  }
  const handleChangeInput = (e)=>{
    setInputValue(e.target.value)
  }

  const handleAdd = ()=>{
    const todo = {
      id: Math.floor(Math.random() * 10000),
      name:inputValue,
      time:"15 min",
      isComplete:true
    }
    setTodos([...todos,todo])
    setInputValue("")
  }

  const handleChangeComplete = (id)=>{
    const newTodos = todos.map((item)=>{
      if(item.id === id){
        return {...item,isComplete:!item.isComplete}
      }
      return item
    })
    setTodos(newTodos)
  }




  
  return (
    <div className='container' style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
      <div className="w-50">
        <label className='form-label'>Add Todo</label>
        <input className='form-control' type="text" value={inputValue} onChange={handleChangeInput}/>
        <button className='btn btn-success mt-3 mb-3' onClick={handleAdd}>Add</button>
      </div>
      
      <ul>
        {todos.map((item)=>{
          return (
            <li key={item.id} className='d-flex mb-3'>
              <TodoItem item={item} onRemove={handleRemoveTodo} onChangeComplete = {handleChangeComplete}/>
            </li> 
          )
        })}
      </ul>
    </div>
    

  )
}
