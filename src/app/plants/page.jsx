import PlantCard from "@/components/cards/PlantCard";
import React from "react";
import plants from "@/data/plants.json";

const AllPlant = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 pl-2 border-l-4 border-green-700">
            Our All Plants
          </h2>
          <p className="text-gray-500 mt-2">
            Find the perfect plant for your space
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default AllPlant;
