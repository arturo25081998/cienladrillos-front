import { getAllItemsInCart } from "@/utils/api";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import Link from "next/link";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!isOpen || !userId) return;

    let isMounted = true;

    async function fetchCart() {
      try {
        const response = await getAllItemsInCart(userId);
        const items = response.items || [];
        const cart = items.map((item) => ({
          id: item.id,
          quantity: item.quantity,
          name: item.name.trim(),
          price: Number(item.price),
          property_id: item.property_id,
        }));
        if (isMounted) setCartItems(cart);
      } catch (error) {
        console.error("Error al cargar carrito:", error);
      }
    }

    fetchCart();

    return () => {
      isMounted = false;
    };
  }, [isOpen, userId]);

  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const refreshCart = async () => {
    if (!userId) return;
    try {
      const response = await getAllItemsInCart(userId);
      const items = response.items || [];
      const cart = items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        name: item.name.trim(),
        price: Number(item.price),
        property_id: item.property_id,
      }));
      setCartItems(cart);
    } catch (error) {
      console.error("Error al refrescar carrito:", error);
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <h2 className="text-lg font-bold">Carrito</h2>
        <button
          onClick={toggleSidebar}
          className="text-white text-xl font-bold focus:outline-none"
        >
          X
        </button>
      </div>

      <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-200px)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-400">Tu carrito está vacío</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              userId={userId}
              refreshCart={refreshCart}
            />
          ))
        )}
      </div>

      <div className="p-4 border-t border-gray-700 flex flex-col">
        <div className="flex justify-between font-semibold text-lg mb-3">
          <span>Total:</span>
          <span>${total.toLocaleString()}</span>
        </div>
        <Link
          href="/checkout"
          className="p-6 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold text-center"
        >
          Proceder al pago
        </Link>
      </div>
    </div>
  );
}
