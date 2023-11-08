import React from 'react'

export default function ModalDetails({isOpenDetails,onClose,productDetails}) {
  if(!isOpenDetails){
    return null
  }
  if(productDetails === null){
    return 
  }
  return (
    <>
      <div className="modal d-block" tabIndex={-1}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Product Details</h5>
                    <button type="button" className="btn-close" onClick={onClose}></button>
                  </div>
                  <div className="modal-body">
                    <div className="card m-2">
                      <img className="card-img-top" src={productDetails.image} alt=""/>
                      <div className="card-body">
                          <h4 className="card-title">{productDetails.name}</h4>
                          <p className="card-text">Price: ${productDetails.price}</p>
                          <p className="card-text">{productDetails.description}</p>
                          <p className="card-text">Quantity: {productDetails.quantity}</p>
                      </div>
                      
                  </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                  </div>
            </div>
          </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  )
}
