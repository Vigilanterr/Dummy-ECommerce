import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { products } from "../data/products";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={p.image} alt={p.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{p.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{p.name}</h3>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">{p.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">Rp {p.price.toLocaleString("id-ID")}</span>
                  <button
                    onClick={() => addToCart(p)}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
