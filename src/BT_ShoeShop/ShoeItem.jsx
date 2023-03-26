import React from "react";

function ShoeItem({ product , onSelectProduct,onAddToCart , onUpdateQuatity }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-body">
        <h3 style={{fontSize:"22px"}} className="card-title">{product.name}</h3>
        <p className="card-text">{product.price}</p>
        <button className="btn btn-outline-success"   onClick={() => onSelectProduct(product)}>Xem chi tiết</button>
        <button 
           onClick={() => onAddToCart(product)}
        className="btn btn-outline-primary">Thêm vào giỏ hàng </button>
      </div>
    </div>
  );
}

export default ShoeItem;
