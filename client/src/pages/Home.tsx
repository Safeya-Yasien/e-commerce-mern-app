import { lazy } from "react";
import { ContactUs, Features, Hero, LimitedTimeOffers } from "@/components";
const Categories = lazy(() => import("@/components/Categories/Categories"));

const Home = () => {
  return (
    <div className="">
      <Hero />

      <Features />

      <Categories />

      <LimitedTimeOffers />

      <ContactUs />
    </div>
  );
};
export default Home;
