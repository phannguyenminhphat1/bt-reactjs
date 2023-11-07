import React from 'react'

export default function GlassItem({item,onSelectGlass}) {
  return (
    <div onClick={()=>onSelectGlass(item)}>
      <img src={item.url} alt=""  />
    </div>
  )
}
