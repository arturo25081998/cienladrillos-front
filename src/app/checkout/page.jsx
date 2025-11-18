"use client";

import { useState } from "react";
import { useItemsCart } from "@/utils/hooks";
import Navbar from "@/components/navbar";

export default function Home() {
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const { itemsCart } = useItemsCart(userId);

  // Estado para el checkbox de términos y condiciones
  const [isChecked, setIsChecked] = useState(false);

  const handlePago = () => {
    if (!isChecked) {
      alert("Debes aceptar los términos y condiciones para pagar");
      return;
    }
    alert("Pagado");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-4 p-8">
        <h1 className="text-xl font-bold text-center pt-8">Checkout</h1>
        {itemsCart == null || itemsCart.length === 0 ? (
          <p className="text-center text-gray-500">
            No hay productos en el carrito
          </p>
        ) : (
          <>
            <table className="w-full border-collapse  border-slate-200">
              <thead>
                <tr className="bg-slate-500">
                  <th className="p-2 text-left">Nombre</th>
                  <th className="p-2">Cantidad</th>
                  <th className="p-2">Precio unitario</th>
                  <th className="p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {itemsCart.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="border border-slate-400 p-2 text-left">
                      {item.name.trim()}
                    </td>
                    <td className="border border-slate-400 p-2">
                      {item.quantity}
                    </td>
                    <td className="border p-2 border-slate-400">
                      ${Number(item.price).toLocaleString()}
                    </td>
                    <td className="border border-slate-400 p-2">
                      ${(Number(item.price) * item.quantity).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex items-center gap-2 mt-4">
              <input
                type="checkbox"
                id="terms"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label>Acepto los términos y condiciones</label>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={handlePago}
                className={`px-4 py-2 rounded text-white ${
                  isChecked
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!isChecked}
              >
                Pagar
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
