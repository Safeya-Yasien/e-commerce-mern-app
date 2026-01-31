import { lazy, Suspense } from "react";
import { ContactUs, Features, Hero, LimitedTimeOffers } from "@/components";
const Categories = lazy(() => import("@/components/Categories/Categories"));

const Home = () => {
  return (
    <div className="">
      <Hero />

      <Features />

      <Suspense fallback={<div>Loading...</div>}>
        <Categories />
      </Suspense>

      <LimitedTimeOffers />

      <ContactUs />
    </div>
  );
};
export default Home;
