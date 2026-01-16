import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="z-10">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
            Bring Nature <br />
            <span className="text-green-700">to your Home</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg">
            Find the perfect plant for your space and learn how to keep it
            thriving with our expert tips.
          </p>
          <Link
            href={"/plants"}
            className="px-5 py-4 bg-green-700 text-white font-bold rounded-md"
          >
            Explore Plants
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="relative h-100 lg:h-150 w-full">
          {/* Main Plant Image */}
          <div className="relative z-10 w-full h-full overflow-hidden rounded-[3rem]">
            <Image
              src="/images/bannerImg.jpg"
              alt="Beautiful Monstera Plant"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Decorative Floating Card (Bottom Left) */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce-slow">
            <div className="bg-green-100 p-2 rounded-lg">
              <span className="text-green-600 font-bold">4.8</span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Satisfied Clients
              </p>
              <p className="text-xs text-gray-500">Over 2k+ happy growers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
