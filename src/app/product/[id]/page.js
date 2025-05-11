"use client";

import Ratings from "@/app/_components/Ratings";
import { products } from "@/app/lib/productData";
import { addToCart } from "@/app/redux/store/slices/cartSlice";
import { ArrowRightCircle, LogOut, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetail() {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const product = products.find((product) => product.id === +id);
  console.log(quantity);
  console.log(product);
  const dispatch = useDispatch();

  //   console.log(id);

  if (!product)
    return (
      <p className="p-6 text-center text-3xl text-slate-950">
        Product could not be found
      </p>
    );

  return (
    <div className="relative xl:max-w-5/6 mx-auto ring-2 ring-blue-600/20 m-8 rounded-3xl shadow-2xl hover:shadow-blue-950/50 transition-all duration-200">
      <div
        title="Go Back"
        className="text-blue-800 rotate-180 absolute top-1 left-2 cursor-pointer hover:-translate-x-0.5 transition-all duration-200"
        onClick={() => router.back()}
      >
        <LogOut />
      </div>
      <div className="p-8 flex flex-col md:flex-row gap-11 justify-center items-center">
        <Image
          src={product.image}
          className="w-full md:w-2/5 md:max-h-[400px] object-cover rounded"
          alt={product.title}
        />

        <div className="flex-1 text-slate-900">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-xl text-blue-800 mb-2">${product.price}</p>
          {/* <p className=" text-yellow-600 mb-4 ">⭐{product.rating}</p> */}
          <Ratings rating={product.rating} />
          <p className="mb-4 mt-4">{product.description}</p>
          <p className="text-sm text-gray-500 mb-4">Brand: {product.brand}</p>
          <p className="text-sm text-gray-500 mb-4">
            Category: {product.category}
          </p>
          <div className="flex items-center justify-center lg:justify-normal gap-3">
            <label className="text-slate-700">Quantity:</label>
            <input
              type="number"
              min={1}
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
              className="md:w-15 w-10 ring-2 ring-blue-700 rounded-xl pl-3 py-2 md:text-center "
            />
            <button
              className="flex rounded-xl gap-2 lg:px-8 px-6 py-3 bg-[#025cb1] cursor-pointer text-white justify-center items-center duration-300 transition-all hover:bg-[#002b5bff]"
              onClick={() => {
                dispatch(addToCart({ ...product, quantity }));
                toast(`${product.title} added to your cart`);
              }}
            >
              <ShoppingCartIcon /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
