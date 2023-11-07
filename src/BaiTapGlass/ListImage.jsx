import React,{useState} from 'react'
import ImageItem from './ImageItem'
export default function ListImage ({glass}) {
  return (
    <>
      <div className='listImage__content'>
          <ImageItem glass={glass}/>
          <ImageItem/>
      </div>

    </>
  )
}
