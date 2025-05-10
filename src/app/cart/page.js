"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../redux/store/slices/cartSlice";
import { ShoppingBagIcon, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import Image from "next/image";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="md:p-6 px-1 md:w-4/5 mx-auto text-slate-900 ">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty</p>
      ) : (
        <div className="space-y-4 mb-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center ring-2 ring-blue-600/60 p-4 rounded-2xl shadow-md"
            >
              <div className="flex items-center gap-5">
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-22 h-22 rounded-2xl"
                  />
                </div>
                <div>
                  <h2 className="font-bold">{item.title}</h2>
                  <p>
                    ${item.price} x {item.quantity}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: parseInt(e.target.value),
                      })
                    )
                  }
                  className="md:w-15 w-10 ring-1 ring-blue-700 rounded-xl pl-3 py-2 md:text-center "
                />
                <button
                  className="text-red-600 hover:scale-110 transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    dispatch(removeFromCart(item.id));
                    toast(`${item.title} removed from your cart`);
                  }}
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
          <div className="flex md:justify-end justify-between md:mx-0 mx-4 gap-3 ">
            <p className="font-bold text-xl">Items: {cartItems.length}</p>
            <p className="font-bold text-xl">Total: ${total.toFixed(2)}</p>
          </div>
          <div className="md:flex justify-end">
            <div className="flex text-xl justify-center md:px-6 px-2 py-4 gap-2 rounded-2xl text-green-400 bg-blue-800 items-center cursor-pointer duration-300 transition-all hover:bg-blue-900">
              <span className=" text-slate-200  ">Check Out</span>
              <ShoppingBagIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
