import { Link, useLocation } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function Navbar() {
  const { cart } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Store
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className={`font-medium transition ${
              isActive("/") ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Products
          </Link>

          <Link
            to="/cart"
            className={`relative p-2 ${
              isActive("/cart")
                ? "bg-gray-100 rounded-full"
                : "hover:bg-gray-50 rounded-full transition"
            }`}
          >
            <span className="text-xl">🛒</span>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
