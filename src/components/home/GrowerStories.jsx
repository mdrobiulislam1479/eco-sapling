import { Star } from "lucide-react";

const stories = [
  {
    name: "Amina R.",
    location: "Seattle, WA",
    quote:
      "My apartment finally feels alive. The weekly care ritual is so simple I never miss a step.",
  },
  {
    name: "Jae L.",
    location: "Austin, TX",
    quote:
      "The styling kit nailed my workspace vibe. It is clean, calm, and still bold.",
  },
  {
    name: "Priya S.",
    location: "Brooklyn, NY",
    quote:
      "Every plant arrived lush. The packaging was beautiful and easy to recycle.",
  },
];

export default function GrowerStories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
              Grower Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Loved by new plant parents.
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Real voices from people turning corners into calming green zones.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-green-700 font-semibold">
            <div className="flex">
              <Star className="h-4 w-4 fill-green-700" />
            </div>
            4.9 average rating
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.name}
              className="rounded-3xl border border-green-100 bg-white p-8 shadow-[0_24px_60px_-40px_rgba(22,101,52,0.65)]"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                &quot;{story.quote}&quot;
              </p>
              <div className="mt-6">
                <p className="text-gray-900 font-semibold">{story.name}</p>
                <p className="text-sm text-gray-500">{story.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
