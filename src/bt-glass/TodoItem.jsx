import React from 'react'

export default function TodoItem({item,onRemove,onChangeComplete}) {
  return (
    <>
        <h2 className={item.isComplete?"text-decoration-line-through":""} onClick={()=>onChangeComplete(item.id)}>{item.name} - {item.time}</h2>
        <button className='btn btn-danger' style={{marginLeft:"15px"}} onClick={()=>onRemove(item.id)}>X</button>
    </>
  )
}
