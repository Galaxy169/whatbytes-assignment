"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../redux/store/slices/cartSlice";
import { Trash2 } from "lucide-react";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 w-4/5 mx-auto text-slate-900 ">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty</p>
      ) : (
        <div className="space-y-4 ">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center ring-2 ring-blue-600/60 p-4 rounded-2xl shadow-md"
            >
              <div className="flex items-center gap-5">
                <div>
                  <img src={item.image} className="w-20 rounded-2xl" />
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
                  className="w-15 ring-1 ring-blue-700 rounded-xl pl-3 py-2 text-center "
                />
                <button
                  className="text-red-600 hover:scale-110 transition-all duration-300 cursor-pointer"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-end gap-3 ">
            <p className="font-bold text-xl">Items: {cartItems.length}</p>
            <p className="font-bold text-xl">Total: ${total.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
