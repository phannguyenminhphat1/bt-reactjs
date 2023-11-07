import React, { useState } from 'react'
import GlassItem from './GlassItem'


export default function ListGlass({glasses,onSelectGlass}) {
  return (
    <div className='listGlass__content container'>
        <div className='row'>

          {glasses.map((item)=>{
            return (
            <div key={item.id} className="col-2 listGlass__item">
                <GlassItem item={item} onSelectGlass={onSelectGlass}/>
                
            </div>
            )
          })}
        </div>
    </div>
  )
}
