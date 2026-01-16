const steps = [
  {
    title: "Meet your plant",
    detail: "Light meter and soil scan help us match the right match.",
  },
  {
    title: "Set a weekly ritual",
    detail: "Simple care cards that guide watering and rotation.",
  },
  {
    title: "Nurture growth",
    detail: "Seasonal reminders and nutrient boosts when it matters.",
  },
  {
    title: "Share the progress",
    detail: "Track growth with photo check-ins and celebrate milestones.",
  },
];

export default function CareRituals() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-green-100/60 to-transparent" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
            Care Rituals
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            A gentle routine for thriving leaves.
          </h2>
          <p className="text-gray-600 mt-4">
            Grow confidence with a rhythm built around your home and schedule.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-green-100 bg-white p-6 shadow-[0_18px_50px_-40px_rgba(22,101,52,0.6)]"
            >
              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-full bg-green-700 text-white font-semibold flex items-center justify-center">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
