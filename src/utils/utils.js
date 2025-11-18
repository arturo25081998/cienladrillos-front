import {
  addItemToCart as apiAddItemToCart,
  decreaseItemToCart as apiDecreaseItemToCart,
} from "@/utils/api";

export async function handleAddToCart(userId, propertyId, quantity = 1) {
  if (!userId) {
    alert("Debes iniciar sesión para agregar al carrito");
    return { error: "No user" };
  }

  const { data, error } = await apiAddItemToCart(
    Number(userId),
    propertyId,
    quantity
  );

  if (error) {
    alert("Error al agregar al carrito: " + error);
    return { error };
  } else {
    alert("Agregado al carrito!");
    return { data };
  }
}

export async function handleDecreaseToCart(userId, propertyId, quantity = 1) {
  if (!userId) {
    alert("Debes iniciar sesión para quitar del carrito");
    return { error: "No user" };
  }

  const { data, error } = await apiDecreaseItemToCart(
    Number(userId),
    propertyId,
    quantity
  );

  if (error) {
    alert("Error al quitar del carrito: " + error);
    return { error };
  } else {
    alert("Item quitado del carrito!");
    return { data };
  }
}
