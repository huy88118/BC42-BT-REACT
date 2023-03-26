import React from 'react'
import ShoeItem from "./ShoeItem"
function ShoeList({ products, onSelectProduct ,onAddToCart}) {
    const handleGetProduct = (product) => {
        onSelectProduct(product);
      };

      const handleAddToCart = (product) => {
        onAddToCart(product);
      };
  return (

    <div className='row'>
{products.map((product) => {
    return (
        <div key={product.id} className="col-sm-4"> 
       
            <ShoeItem
            product={product}
            onSelectProduct={handleGetProduct}
            onAddToCart={handleAddToCart}
            />
           </div>
    )
})}
</div>
  )
}

export default ShoeList