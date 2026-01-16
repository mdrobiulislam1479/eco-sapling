import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-green-100">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <Logo />
          <p className="mt-3 text-sm leading-relaxed">
            We provide eco-friendly plants and trees to make the world greener
            and healthier.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/plants">Plants</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@ecosapling.com</li>
            <li>Phone: +880 1234 567890</li>
            <li>Address: Khulna, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-green-700 border-t border-green-800">
          <p>© {new Date().getFullYear()} EcoSapling. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with 🌱 for a greener future</p>
        </div>
      </div>
    </footer>
  );
}
