import React, { useState } from "react";
import ProductList from "./ProductList";
import data from "./data.json";
import ModalDetails from "./ModalDetails";
import ModalCart from "./ModalCart";

export default function ShoesStore() {
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [carts, setCarts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const handleProductDetails = (product) => {
    setIsOpenDetails(true);
    setProductDetails(product);
  };
  const handleCart = (product) => {
    const result = carts.find((item) => item.id === product.id);
    if (result) {
      alert("Add to cart success");
      const newCart = [...carts];
      result.quantity += 1;
      setCarts(newCart);
    } else {
      alert("Add to cart success");
      setCarts([...carts, { ...product, quantity: 1 }]);
    }
    setIsOpenCart(true);
  };
  const handleDeleteProductCart = (id) => {
    const newCart = carts.filter((item) => item.id !== id);
    if (newCart) {
      alert("Delete product success");
      setCarts(newCart);
    }
  };

  return (
    <div>
      <h2 className="title">SHOES STORE</h2>
      <ProductList
        listProduct={data}
        handleProductDetails={handleProductDetails}
        handleCart={handleCart}
      />
      <ModalDetails
        isOpenDetails={isOpenDetails}
        productDetails={productDetails}
        onClose={() => setIsOpenDetails(false)}
      />
      <ModalCart
        handleDeleteProductCart={handleDeleteProductCart}
        carts={carts}
        isOpenCart={isOpenCart}
        onClose={() => setIsOpenCart(false)}
      />
    </div>
  );
}
