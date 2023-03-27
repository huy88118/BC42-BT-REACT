import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import axios from "axios";
import Search from "./Search";

function Product() {
  // state quản lý danh sách sản phẩm
  const [products, setProducts] = useState([]);
  // state quản lý sản phẩm đang được chọn
  const [selectedProduct, setSelectedProduct] = useState({});
  // state quản lý giá trị tìm kiếm
  const [searchByName, setSearchByName] = useState("");

  // Viết hàm call API để lấy danh sách products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://63e864225f3e35d898f01fc9.mockapi.io/api/Product",
        {
          params: {
            name:searchByName || undefined,
          },
        }
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý nhận vào object product và thêm hoặc cập nhật products
  const handleSubmit = async (product) => {
    const { id, ...payload } = product;

    try {
      if (id) {
        // Cập nhật
        await axios.put(
          `https://63e864225f3e35d898f01fc9.mockapi.io/api/Product/${id}`,
          payload
        );
      } else {
        // Thêm mới
        await axios.post(
          "https://63e864225f3e35d898f01fc9.mockapi.io/api/Product",
          payload
        );
      }
      // Gọi hàm fetchProducts sau khi call API create/update
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý nhận vào productId và xoá product
  const handleDeleteProduct = async (productId) => {
    try {
      await axios.delete(
        `https://63e864225f3e35d898f01fc9.mockapi.io/api/Product/${productId}`
      );
      // Sau khi xoá thành công, dữ liệu chỉ mới thay đổi ở phía server
      // Cần gọi lại hàm fetchUsers để gọi API lấy danh sách users mới nhất và set lại cho state users
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý nhận vào object user, và lưu vào state selectedUser
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  // Viết hàm xử lý nhận vào giá trị searchString
  const handleSearch = (searchString) => {
    setSearchByName(searchString);
    // ?: Khi state searchByEmail thay đổi, ta muốn gọi lại hàm fetchUser
    // => Đưa state searchByEmail vào array của ú
  };

  useEffect(() => {
    fetchProducts();
  }, [searchByName]);

  return (
    <div className="container-fluid">
      <h1 className="text-center text-primary">Quản lí sản phẩm</h1>

      <div className="card">
        <div className="card-header bg-dark text-white">Product Form</div>
        <div className="card-body">
          <ProductForm
            product={selectedProduct}
            onSubmit={handleSubmit}
            onReset={() => setSelectedProduct({})}
          />
        </div>
      </div>

      <div className="mt-4">
        <Search onSearch={handleSearch} />
      </div>

      <div className="mt-4">
        <ProductList
          products={products}
          onDeleteProduct={handleDeleteProduct}
          onSelectProduct={handleSelectProduct}
        />
      </div>
    </div>
  );
}

export default Product;
