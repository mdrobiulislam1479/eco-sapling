import Link from "next/link";
import { GiBonsaiTree } from "react-icons/gi";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2 text-3xl">
      <div className="text-green-700">
        <GiBonsaiTree />
      </div>
      <p className="font-bold">
        Eco<span className="text-green-700">Sapling</span>
      </p>
    </Link>
  );
};

export default Logo;
