import React from 'react'

function ShoeDetails({product ,onClose }) {
    
    if (!product) {
        return null;
      }
  return (
    <>
   <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex={-1}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thông tin</h5>
              <button className="btn-close"   onClick={onClose} />
            </div>
            <div className="modal-body">
              <table className="table">
                
              <div className="mt-3 row ">
   <div className="col-sm-4">
    <h3 className="text-center">
      {product.name}
    </h3>
    <img width="250px" height="250px" src={product.image} alt={product.image} />
   </div>
   <div className="col-sm-8">
    <h3>Chi tiết sản phẩm</h3>
<table className="table">
<tbody>
<tr>
  <td>Name :</td>
  <td>{product.name}</td>
</tr>
<tr>
  <td>Alias :</td>
  <td>{product.alias}</td>
</tr>
<tr>
  <td>Price :</td>
  <td>{product.price}</td>
</tr>
<tr>
  <td>Description :</td>
  <td>{product.description}</td>
</tr>
<tr>
  <td>ShortDescription:</td>
  <td>{product.shortDescription}</td>
</tr>
<tr>
  <td>Quantity :</td>
  <td>{product.quantity}</td>
</tr>
</tbody>
</table>
   </div>
  
  </div>


              </table>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose} >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show" />
    </>


  

   
    
    
  )
}

export default ShoeDetails