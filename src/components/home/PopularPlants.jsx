import plants from "@/data/plants.json";
import PlantCard from "../cards/PlantCard";

export default function PopularPlants() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">Popular Plants</h2>
          <p className="text-gray-500 mt-2">Our most loved green friends</p>
        </div>
        <button className="text-green-700 font-semibold hover:underline cursor-pointer">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {plants.slice(0, 4).map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}
