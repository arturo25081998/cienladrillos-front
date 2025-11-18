import { useEffect, useState } from "react";
import { getAllProperties, getAllItemsInCart } from "./api";

export function useProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getAllProperties()
      .then((data) => setProperties(data))
      .catch((error) => console.log("Use products error:", error));
  }, []);

  return { properties };
}

export function useItemsCart(userId) {
  const [itemsCart, setItemsCart] = useState([]);

  useEffect(() => {
    if (!userId) return;
    getAllItemsInCart(userId)
      .then((data) => setItemsCart(data.items))
      .catch((error) => console.log("useItemsCart error: ", error));
  }, [userId]);
  console.log(itemsCart);
  return { itemsCart };
}
