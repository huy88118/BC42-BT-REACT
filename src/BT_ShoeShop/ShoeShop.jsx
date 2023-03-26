import React , {useState} from 'react'
import data from "./data.json"
import ShoeList from './ShoeList';
import Cart from './Cart';
import ShoeDetails from './ShoeDetails';

function ShoeShop() {


  const [selectedProduct, setSelectedProduct] = useState(null);

   // state quản lý trạng thái ẩn/hiện của giỏ hàng
   const [isOpen, setIsOpen] = useState(false);

   // state quản lý các sản phẩm được thêm vào giỏ hàng
  const [carts, setCarts] = useState([]);

  const handleGetProduct = (product) => {
    
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    // Tìm xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const index = carts.findIndex((item) => item.id === product.id);

    if (index === -1) {
      // Chưa tồn tại => Thêm sản phẩm vào giỏ hàng và đặt số lượng là 1
      const newProduct = { ...product, quantity: 1 };
      setCarts([...carts, newProduct]);
    } else {
      // Đã tồn tại => Tăng số lượng của sản phẩm lên 1
      const newCarts = [...carts];
      newCarts[index].quantity += 1;
      setCarts(newCarts);
    }
  };

  const handleDeleteProductFromCart = (productId) => {
    const newCarts = carts.filter((item) => item.id !== productId);
    setCarts(newCarts);
  };

  const handleUpdateQuantity = (productId, quantity) => {
    const newCarts = carts.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + quantity };
      }

      return item;
    });

    setCarts(newCarts);
  };

   // Tính tổng số lượng sản phẩm trong giỏ hàng
   const totalItems = carts.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div className='container'>
<h1 style={{fontSize:"80px"}} className='text-center'>ShoeShop</h1>
<div className="d-flex justify-content-end mb-3">
        <button style={{fontSize:"20px"}} className="btn btn-primary" onClick={() => setIsOpen(true)}>
        <i className="fa-sharp fa-solid fa-cart-shopping fa-bounce"></i> Giỏ hàng
          {totalItems > 0 && <span className="ms-2">({totalItems})</span>}
        </button>
      </div>
      <ShoeList
       products={data}
         onSelectProduct={handleGetProduct}
         onAddToCart={handleAddToCart}
         
      />
       <ShoeDetails product={selectedProduct}
       
        onClose={() => handleGetProduct(null)}
        />
          <Cart 
           carts={carts}
          onDelete={handleDeleteProductFromCart}
          onUpdateQuantity={handleUpdateQuantity}
           isOpen={isOpen}
           onClose={() => setIsOpen(false)}
          />
    </div>
  )
}

export default ShoeShop