import plants from "@/data/plants.json";
import { ChevronLeft, Droplets, ShoppingBag, Sun, Wind } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PlantDetails = async ({ params }) => {
  const { id } = await params;
  const plant = plants.find((plant) => id === plant.id);

  if (!plant) return <div className="p-10 text-center">Plant not found</div>;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6">
        {/* Navigation Header */}
        <nav className="py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
            <span className="font-medium">Back</span>
          </Link>
        </nav>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center pb-12">
          {/* Left: Product Image */}
          <div className="relative aspect-square w-full rounded-[3rem] overflow-hidden bg-[#F1F3F2]">
            <Image
              src={plant.image}
              alt={plant.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-green-600 font-semibold tracking-widest uppercase text-sm">
                {plant.category}
              </span>
              <h1 className="text-5xl font-bold text-gray-900 mt-2 mb-4">
                {plant.name}
              </h1>
              <p className="italic text-gray-400 mb-6">
                {plant.scientific_name}
              </p>
              <p className="text-3xl font-bold text-gray-900">
                ${plant.price.toFixed(2)}
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
              {plant.description}
            </p>

            {/* Plant Specs Grid */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-[#f7fdf9] p-4 rounded-2xl flex flex-col items-center text-center">
                <Sun className="text-green-600 mb-2" size={20} />
                <span className="text-xs text-gray-400 uppercase font-bold">
                  Light
                </span>
                <p className="text-sm font-semibold">{plant.light}</p>
              </div>
              <div className="bg-[#f7fdf9] p-4 rounded-2xl flex flex-col items-center text-center">
                <Droplets className="text-blue-500 mb-2" size={20} />
                <span className="text-xs text-gray-400 uppercase font-bold">
                  Water
                </span>
                <p className="text-sm font-semibold">{plant.water}</p>
              </div>
              <div className="bg-[#f7fdf9] p-4 rounded-2xl flex flex-col items-center text-center">
                <Wind className="text-orange-400 mb-2" size={20} />
                <span className="text-xs text-gray-400 uppercase font-bold">
                  Humidity
                </span>
                <p className="text-sm font-semibold">{plant.humidity}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button className="flex-1 w-full text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 transition-colors shadow-xl shadow-green-100">
                <ShoppingBag size={20} />
                Add to Cart
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-12 border-t border-gray-100 pt-8">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>In Stock - Ready for same-day delivery</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PlantDetails;
