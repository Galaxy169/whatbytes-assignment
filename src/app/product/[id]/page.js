"use client";

import { products } from "@/app/lib/productData";
import { addToCart } from "@/app/redux/store/slices/cartSlice";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  //   console.log(id);

  const product = products.find((product) => product.id === +id);
  if (!product)
    return (
      <p className="p-6 text-center text-3xl text-slate-950">
        Product could not be found
      </p>
    );

  return (
    <div className="md:max-w-3/5 mx-auto ring-2 ring-blue-600/20 m-8 rounded-3xl shadow-2xl hover:shadow-blue-950/50 transition-all duration-200">
      <div className="p-8 flex flex-col md:flex-row gap-11 justify-center items-center">
        <Image
          src={product.image}
          className="w-full md:w-2/5 object-cover rounded"
          alt={product.title}
        />

        <div className="flex-1 text-slate-900">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-xl text-blue-800 mb-2">${product.price}</p>
          <p className=" text-yellow-600 mb-4 ">⭐{product.rating}</p>
          <p className="mb-4">{product.description}</p>
          <p className="text-sm text-gray-500 mb-4">Brand: {product.brand}</p>
          <p className="text-sm text-gray-500 mb-4">
            Category: {product.category}
          </p>

          <button
            className="flex rounded-xl gap-2 px-8 py-3 bg-[#025cb1] cursor-pointer text-white justify-center items-center duration-300 transition-all hover:bg-[#002b5bff]"
            onClick={() => {
              dispatch(addToCart(product));
              toast(`${product.title} added to your cart`);
            }}
          >
            <ShoppingCartIcon /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
