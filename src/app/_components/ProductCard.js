"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/store/slices/cartSlice";
import toast from "react-hot-toast";
import Image from "next/image";
import Ratings from "./Ratings";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    dispatch(addToCart(product));
    toast(`${product.title} added to your cart`);
  };
  return (
    <>
      <Link href={`/product/${product.id}`} className="block">
        <div
          className="flex flex-col text-slate-900 bg-[#fefefe] rounded-md p-4 gap-1 shadow hover:shadow-lg transition"
          key={product.id}
        >
          <Image
            src={product.image}
            alt={product.title}
            className="w-full h-60 object-cover mb-2 hover:rounded-[50px] transition-all duration-700 rounded-3xl"
          />
          <h3 className="font-bold text-xl">{product.title}</h3>
          <p className="font-semibold text-lg">${product.price}</p>
          <Ratings rating={product.rating} />
          <div
            onClick={(e) => handleAddToCart(e, product)}
            className="flex gap-2 px-8 py-3 mt-2 rounded-xl bg-[#025cb1] text-white justify-center items-center duration-300 transition-all hover:bg-[#002b5bff]"
          >
            <button className="font-bold cursor-pointer">Add to Cart</button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
