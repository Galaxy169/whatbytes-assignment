"use client";

import { products } from "@/app/lib/productData";
import { addToCart } from "@/app/redux/store/slices/cartSlice";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";

export default function ProductDetail({ params }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);

  const product = products.find((product) => product.id === +id);
  if (!product)
    return (
      <p className="p-6 text-center text-3xl text-slate-950">
        Product could not be found
      </p>
    );

  return (
    <div className="max-w-3/5 mx-auto ring-2 ring-blue-600/20 m-8 rounded-3xl shadow-2xl hover:shadow-blue-950/50 transition-all duration-200">
      <div className="p-8 flex flex-col md:flex-row gap-11 justify-center items-center">
        <img
          src={product.image}
          className="w-full md:w-2/4 object-cover rounded"
          alt={product.title}
        />

        <div className="flex-1 text-black">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-xl text-blue-700 mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <p className="text-sm text-gray-500 mb-4">
            Category: {product.category}
          </p>

          <button
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
