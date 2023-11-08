import React from 'react'

export default function ModalCart({carts,onClose,isOpenCart,handleDeleteProductCart}) {
  if(!isOpenCart){
    return null
  }
  return (
    <>
      <div className="modal d-block" tabIndex={-1}>
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Cart</h5>
                    <button type="button" className="btn-close" onClick={onClose} ></button>
                  </div>
                  <div className="modal-body">
                    <div className="card m-2">
                      <img className="card-img-top" src="" alt=""/>
                      <div className="card-body">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Mã sản phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              {carts.map((item)=>{
                                return (
                                    <tr  key={item.id}>
                                            <td>{item.id}</td>
                                            <td><img alt='Img' width={70} height={70} src={item.image}/></td>
                                            <td>{item.name}</td>
                                            <td>{item.quantity}</td>
                                            <td>${item.price}</td>
                                            <td>${parseInt(item.quantity * item.price)}</td>
                                            <td>
                                              <button className='btn btn-danger' onClick={()=>handleDeleteProductCart(item.id)}>Xóa</button>
                                            </td>                                        
                                    </tr>
                                  
                                )
                              })}
                            </tbody>
                          </table>
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
