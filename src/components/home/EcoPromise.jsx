import { Leaf, Recycle, Droplets } from "lucide-react";

const promiseItems = [
  {
    icon: Leaf,
    title: "Low-impact sourcing",
    description: "Partner nurseries use peat-free soil and careful water cycles.",
  },
  {
    icon: Recycle,
    title: "Packaging with purpose",
    description: "Recycled fiber pots and box fillers that go back to the earth.",
  },
  {
    icon: Droplets,
    title: "Water-smart care",
    description: "Guides built for healthy plants with less daily water.",
  },
];

export default function EcoPromise() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute -top-16 -right-24 h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-100/80 blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
            Eco Promise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Plants with a lighter footprint.
          </h2>
          <p className="text-gray-600 mt-4">
            Every delivery is designed to feel generous while keeping waste low
            and care effortless.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {promiseItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white/80 backdrop-blur border border-green-100 rounded-2xl p-6 shadow-[0_20px_60px_-40px_rgba(22,101,52,0.45)]"
              >
                <div className="h-12 w-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
