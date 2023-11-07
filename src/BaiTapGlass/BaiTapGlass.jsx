import React, { useState } from 'react'
import Header from './Header'
import ListImage from './ListImage'
import ListGlass from './ListGlass'
import data from "./dataGlasses.json"


export default function BaiTapGlasses () {
  const [selectedGlass,setSetlectedGlass] = useState(null)
  const onSelectGlass = (glass) => {
    setSetlectedGlass(glass)
  }
  return (
    <div className='glass'>
        <Header/>
        <ListImage glass={selectedGlass}/>
        <ListGlass glasses={data} onSelectGlass={onSelectGlass}/>

    </div>
  )
}
