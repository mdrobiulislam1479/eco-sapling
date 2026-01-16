import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] px-6 py-16">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-green-700">
          404 Not Found
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
          This page is missing from the EceSapling.
        </h1>
        <p className="text-gray-600 mt-4">
          The link might be broken, or the page may have moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-green-700 text-white font-semibold hover:bg-green-800 transition"
          >
            Back to home
          </Link>
          <Link
            href="/plants"
            className="px-6 py-3 rounded-full border border-green-200 text-green-700 font-semibold hover:bg-green-50 transition"
          >
            Browse plants
          </Link>
        </div>
      </div>
    </main>
  );
}
