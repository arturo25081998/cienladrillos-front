import { useEffect, useState } from "react";
import { getAllProperties } from "./api";

export function useProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getAllProperties()
      .then((data) => setProperties(data))
      .catch((error) => console.log("Use products error:", error));
  }, []);

  return { properties };
}
