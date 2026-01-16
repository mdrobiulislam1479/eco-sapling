import React from "react";
import Logo from "./Logo";
import NavLink from "../buttons/NavLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-green-100/80 sticky top-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-5">
        <Logo />
        <div className="flex gap-6 items-center">
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/plants"}>Plants</NavLink>
          <Link
            href={"/login"}
            className="px-5 py-2 bg-green-700 rounded-md text-white font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
