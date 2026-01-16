import Image from "next/image";
import Link from "next/link";

export default function PlantCard({ plant }) {
  const { id, name, category, price, image, difficulty } = plant;
  return (
    <div className="group relative bg-white rounded-xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-green-100 border border-transparent hover:border-green-50">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden rounded-xl bg-[#F1F3F2]">
        <Image
          src={image}
          alt={name}
          fill
          priority
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Difficulty Badge */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-[10px] font-bold uppercase tracking-wider text-green-700">
            {difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-5 px-2 pb-2">
        <div className="flex justify-between items-start mb-1">
          <div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">
              {category}
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-1">{name}</h3>
          </div>
          <p className="text-xl font-bold text-green-700">${price}</p>
        </div>

        {/* Action Button */}
        <Link
          href={`/plants/${id}`}
          className="mt-4 w-full flex items-center justify-center gap-2 py-3 text-white rounded-xl font-semibold transition-all active:scale-95 bg-green-700 cursor-pointer"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
