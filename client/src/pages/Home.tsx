import { lazy, Suspense } from "react";
import {
  ContactUs,
  Features,
  Hero,
  LimitedTimeOffers,
  ProductCardSkeleton,
} from "@/components";
const Categories = lazy(() => import("@/components/Categories/Categories"));

const CategoriesSkeleton = () => (
  <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4 px-4 py-20">
    {Array.from({ length: 8 }).map((_, idx) => (
      <ProductCardSkeleton key={idx} />
    ))}
  </div>
);

const Home = () => {
  return (
    <div className="">
      <Hero />

      <Features />

      <Suspense fallback={<CategoriesSkeleton />}>
        <Categories />
      </Suspense>

      <LimitedTimeOffers />

      <ContactUs />
    </div>
  );
};
export default Home;
