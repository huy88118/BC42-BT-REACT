import React from "react";

function ProductList({ products, onDeleteProduct, onSelectProduct }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Image</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.type}</td>
              <td>{product.desc}</td>
              <td><img style={{width:"70px" , height:"70px"}}  src={product.image} alt="" /></td>
              <td>{product.price}</td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => onSelectProduct(product)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductList;
