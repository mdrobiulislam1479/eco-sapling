"use client";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-emerald-900 via-green-900 to-green-800 px-8 py-14 md:px-14">
          <div className="absolute -top-24 -right-10 h-48 w-48 rounded-full bg-emerald-500/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-8 h-56 w-56 rounded-full bg-lime-400/30 blur-3xl" />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                Plant Post
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
                Weekly care notes, styling tips, and early drops.
              </h2>
              <p className="text-emerald-100 mt-4">
                Join a growing community that keeps their green companions
                thriving.
              </p>
            </div>

            <form className="w-full max-w-xl" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-emerald-200/30 bg-white/10 px-6 py-4 text-white placeholder:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-4 font-semibold text-emerald-900 hover:bg-emerald-200 transition"
                >
                  Join the list
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <p className="text-xs text-emerald-200 mt-3">
                No spam. Just care check-ins and plant drops.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
