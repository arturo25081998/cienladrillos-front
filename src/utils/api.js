const API_URL = "http://localhost:3000";

export async function getAllProperties() {
  try {
    const res = await fetch(`${API_URL}/properties`);
    if (!res.ok) throw new Error("Error getting properties");

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getAllItemsInCart(userId) {
  try {
    const res = await fetch(`${API_URL}/carts/items/${userId}`);
    if (!res.ok) throw new Error("Error getting properties");

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function addItemToCart(userId, propertyId, quantity) {
  try {
    const res = await fetch(`${API_URL}/carts/items/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ propertyId, quantity }),
    });

    if (!res.ok) throw new Error("Error adding item to cart");

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function decreaseItemToCart(userId, propertyId, quantity) {
  try {
    const res = await fetch(`${API_URL}/carts/items/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ propertyId, quantity }),
    });

    if (!res.ok) throw new Error("Error adding item to cart");

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
