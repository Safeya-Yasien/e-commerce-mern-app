  import {
    ContactUs,
    Features,
    Hero,
    Categories,
    LimitedTimeOffers,
  } from "@/components";
  import { Suspense } from "react";

  const Home = () => {
    return (
      <div className="">
        <Hero />

        <Features />

        <Suspense fallback={<div>Loading Categories...</div>}>
          <Categories />
        </Suspense>

        <LimitedTimeOffers />

        <ContactUs />
      </div>
    );
  };
  export default Home;
