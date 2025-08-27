// src/pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import products from "../product";
import { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart, showCart } = useContext(CartContext);

  const allProducts = Object.values(products).flat();
  const product = allProducts.find((item) => item.id.toString() === id);

  // Add state to manage the currently displayed main image
  const [mainImage, setMainImage] = useState(product?.image);

  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="flex flex-col pt-20 pb-4">
      <div className="flex justify-between items-center px-8 w-full">
        <div className="flex gap-3 p-5 items-center w-5/6">
          <Link
            to="/"
            className="hover:text-blue-700 hover:underline font-semibold"
          >
            Home
          </Link>
          <span>></span>
          <span className=" w-full font-extrabold overflow-hidden whitespace-nowrap text-ellipsis">
            {product.name}
          </span>
        </div>
      </div>

      {/* Show Cart if true */}
      {showCart && (
        <div className="absolute sm:right-0 z-50 bg-white shadow-lg rounded sm:w-1/2 w-full">
          <Cart />
        </div>
      )}

      <div className="flex items-center p-8 max-w-4xl mx-auto ">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex flex-col gap-2 w-full ">
            {/* Main image display */}
            <img
              src={`${process.env.PUBLIC_URL}/images/${mainImage}`}
              alt={product.name}
              className="w-full object-cover rounded-lg mb-4"
            />

            {/* Thumbnails */}
            <div className="w-full flex gap-4 justify-center ">
              {[product.image, product.tumb1, product.tumb2, product.tumb3].map(
                (img, index) => (
                  <img
                    key={index}
                    src={`${process.env.PUBLIC_URL}/images/${img}`}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setMainImage(img)}
                    className={`w-[20%] rounded-lg ${
                      mainImage !== img
                        ? "cursor-pointer opacity-60 hover:opacity-100 transition"
                        : "border border-green-500 border-b-8 shadow-lg transition duration-300"
                    }`}
                  />
                )
              )}
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
            <div>
              <span className="text-2xl font-extrabold">Features</span>
              <p className="text-xl text-gray-600 mb-4">{product.feature}</p>
            </div>
            <div>
              <span className="text-2xl font-extrabold">Description</span>
              <p className="text-xl text-gray-600 mb-4">
                {product.description}
              </p>
            </div>
            <div className="flex flex-col w-fit">
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
