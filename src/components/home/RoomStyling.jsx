import { Sparkles } from "lucide-react";
import Image from "next/image";

const spaces = [
  {
    name: "Sunlit Living",
    vibe: "Layer leafy heights with trailing vines.",
    tone: "from-amber-50 via-lime-50 to-emerald-100",
    image: "https://i.ibb.co.com/6R28Hp0X/trees-3822149-1920.jpg",
  },
  {
    name: "Calm Bedroom",
    vibe: "Soft textures and quiet, sculptural greens.",
    tone: "from-slate-50 via-emerald-50 to-green-100",
    image: "https://i.ibb.co.com/dwT0hNR3/house-2607494-1280.jpg",
  },
  {
    name: "Focused Workspace",
    vibe: "Compact planters that sharpen your flow.",
    tone: "from-lime-50 via-teal-50 to-emerald-100",
    image: "https://i.ibb.co.com/xtSKPzQF/office-desk-6952919-1920.jpg",
  },
];

export default function RoomStyling() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
              Styling Studio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Curated moods for every room.
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              We match plants to light, rhythm, and texture so each space feels
              intentional.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-green-700 font-semibold">
            <Sparkles className="h-5 w-5" />
            Fresh looks each season
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <div
              key={space.name}
              className={`relative overflow-hidden rounded-3xl border border-green-100 p-8 bg-gradient-to-br ${space.tone}`}
            >
              <div className="absolute -top-16 -right-20 h-40 w-40 rounded-full bg-white/50 blur-2xl" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.2em] text-green-800/70 font-semibold">
                  {space.name}
                </p>
                <h3 className="text-2xl font-semibold text-gray-900 mt-3">
                  {space.vibe}
                </h3>
                <div className="mt-6 h-32 rounded-2xl border border-white/60 bg-white/40 backdrop-blur overflow-hidden">
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Light guide, plant pairings, and styling checklist included.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
