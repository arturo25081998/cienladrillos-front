import { handleAddToCart, handleDecreaseToCart } from "@/utils/utils";

export default function CartItem({ item, userId, refreshCart }) {
  return (
    <div className="border-b border-gray-700 pb-2 flex flex-col gap-1">
      <p className="font-semibold">{item.name}</p>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-400">
          {item.quantity} x ${item.price.toLocaleString()}
        </p>

        <div className="flex items-center gap-2">
          <button
            className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
            onClick={async () => {
              await handleDecreaseToCart(userId, item.property_id, 1);
              refreshCart();
            }}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
            onClick={async () => {
              await handleAddToCart(userId, item.property_id, 1);
              refreshCart();
            }}
          >
            +
          </button>
        </div>
      </div>

      <p className="font-bold mt-1">
        ${(item.price * item.quantity).toLocaleString()}
      </p>
    </div>
  );
}
