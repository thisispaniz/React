import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from "../store/cartSlice";

const CartPage = ({ setPage }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    return (
        <div className="p-4">
            <h2 className="text-3xl text-center mb-4">Shopping Cart</h2>
    
          {cartItems.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b p-4">
                  <img src={item.img} alt={item.name} className="w-16 h-16" />
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  
                  <div className="flex items-center">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-2 py-1 bg-gray-300">
                      ➖
                    </button>
                    <p className="mx-2">{item.quantity}</p>
                    <button onClick={() => dispatch(increaseQuantity(item.id))} className="px-2 py-1 bg-gray-300">
                      ➕
                    </button>
                  </div>
    
                  <p>Total: ${item.price * item.quantity}</p>
    
                  <button onClick={() => dispatch(removeItem(item.id))} className="px-2 py-1 bg-red-500 text-white">
                    ❌ Remove
                  </button>
                </div>
              ))}
            </div>
          )}
                {cartItems.length > 0 && (
        <div className="text-center mt-4">
          <h3 className="text-xl">Total Price: ${totalPrice}</h3>
          <button onClick={() => alert("Coming Soon!")} className="mt-2 px-4 py-2 bg-blue-600 text-white">
            Checkout
          </button>
          <button onClick={() => setPage("products")} className="ml-4 px-4 py-2 bg-gray-600 text-white">
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

    