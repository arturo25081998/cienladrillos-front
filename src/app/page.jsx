"use client";

import { useProperties } from "@/utils/hooks";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/navbar";
export default function Home() {
  const { properties } = useProperties();

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-8">
        <h1 className="text-xl font-bold text-center pt-8">Properties</h1>

        <section className="grid grid-cols-5 gap-4 px-8">
          {properties.map((property) => {
            return (
              <PropertyCard
                key={property.id}
                property={property}
              ></PropertyCard>
            );
          })}
        </section>
      </div>
    </>
  );
}
