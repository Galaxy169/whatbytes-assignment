"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/store/slices/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e, id) => {
    e.preventDefault();
    dispatch(addToCart(id));
  };
  return (
    <>
      <Link href={`/product/${product.id}`} className="block">
        <div
          className="flex flex-col text-slate-900 bg-[#fefefe] rounded-md p-4 gap-1 shadow hover:shadow-lg transition"
          key={product.id}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-60 object-cover mb-2"
          />
          <h3 className="font-bold text-xl">{product.title}</h3>
          <p className="font-semibold text-lg mb-2">${product.price}</p>
          <div
            onClick={(e) => handleAddToCart(e, product)}
            className="flex gap-2 px-8 py-3 rounded-xl bg-[#025cb1] text-white justify-center items-center duration-300 transition-all hover:bg-[#002b5bff]"
          >
            <button className="font-bold cursor-pointer">Add to Cart</button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
