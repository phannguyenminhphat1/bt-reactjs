import React from 'react'

export default function ImageItem({glass}) {
  if(!glass){
    return (
      <div className='listImage__item'>
          <img src="./glassesImage/model.jpg" alt="alo"/>
      </div>
    )
  }
  return (
      <div className='listImage__item'>
          <img src="./glassesImage/model.jpg" alt="alo"/>
          <div className="listImage__item-text">
            <h4>{glass.name}</h4>
            <p>{glass.desc}</p>
          </div>
          <div className='listImage__item-selectedGlass'>
            <img src={glass.url} alt="abc"/>
          </div>
      </div>
    )
  }

