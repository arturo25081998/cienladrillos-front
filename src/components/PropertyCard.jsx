import { handleAddToCart } from "@/utils/utils";

export default function PropertyCard({ property }) {
  const price = Number(property.price);
  const userId =
    typeof window !== "undefined" ? localStorage.getItem("userId") : null;

  return (
    <article className="flex flex-col border border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />

      <div className="flex flex-col gap-2 p-4">
        <h2 className="text-xl font-bold text-gray-800">{property.name}</h2>

        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-semibold">
            $
            {price.toLocaleString("en-US", {
              minimumFractionDigits: 1,
              maximumFractionDigits: 1,
            })}
          </span>
          <span
            className={`px-2 py-1 rounded-lg text-sm font-medium ${
              property.stock > 0
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {property.stock > 0 ? `Avaliable` : "Out of stock"}
          </span>
        </div>

        <button
          onClick={() => handleAddToCart(userId, property.id, 1)}
          className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400"
          disabled={property.stock === 0}
        >
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}
