import React from 'react'

export default function ProductItem({item,handleProductDetails,handleCart}) {
  return (
        <div className="card m-2">
            <img className="card-img-top" src={item.image} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">Price: ${item.price}</p>
            </div>
            <div className="d-flex">
                <button onClick={()=>handleCart(item)} className='btn btn-success me-2'>
                    Add to cart
                </button>
                <button  onClick={()=>handleProductDetails(item)} className='btn btn-primary' >
                    See details
                </button>
            </div>
        </div>

    
  )
}
