import {
  ContactUs,
  Features,
  Hero,
  Categories,
  LimitedTimeOffers,
} from "@/components";

const Home = () => {
  return (
    <div className="px-4 md:px-4 lg:px-4">
      <Hero />

      <Features />

      <Categories />

      <LimitedTimeOffers />

      <ContactUs />
    </div>
  );
};
export default Home;
