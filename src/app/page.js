import Banner from "@/components/home/Banner";
import PopularPlants from "@/components/home/PopularPlants";
import EcoPromise from "@/components/home/EcoPromise";
import RoomStyling from "@/components/home/RoomStyling";
import CareRituals from "@/components/home/CareRituals";
import GrowerStories from "@/components/home/GrowerStories";
import Newsletter from "@/components/home/Newsletter";

export const metadata = {
  title: " Home | Eco Sapling",
  description:
    "Discover curated plants, care rituals, and styling inspiration for greener spaces.",
  openGraph: {
    title: "Eco Sapling | Home",
    description:
      "Discover curated plants, care rituals, and styling inspiration for greener spaces.",
    url: "/",
  },
  twitter: {
    title: "Eco Sapling | Home",
    description:
      "Discover curated plants, care rituals, and styling inspiration for greener spaces.",
  },
};

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularPlants />
      <EcoPromise />
      <RoomStyling />
      <CareRituals />
      <GrowerStories />
      <Newsletter />
    </div>
  );
};

export default Home;
