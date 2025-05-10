"use client";

import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../redux/store/slices/cartSlice";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 w-4/5 mx-auto text-slate-950">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded"
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
                  className="w-16 border rounded p-1"
                />
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <p className="text-right font-bold text-xl">
            Total: ${total.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

export default CartPage;
