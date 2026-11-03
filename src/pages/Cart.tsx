import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border">
            <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
            <Link to="/" className="text-blue-600 font-medium hover:underline">
              Browse products
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-xl border overflow-hidden">
              {cart.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex items-center gap-6 p-6 ${index !== cart.length - 1 ? "border-b" : ""}`}
                >
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.category}</p>
                    <p className="text-gray-900 font-bold mt-1">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center border rounded-lg hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center border rounded-lg hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl border mt-6 p-6 flex justify-between items-center">
              <div>
                <p className="text-gray-500">Total</p>
                <p className="text-2xl font-bold text-gray-900">
                  Rp {total.toLocaleString("id-ID")}
                </p>
              </div>
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
