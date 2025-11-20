import { ContactUs, Features, Hero, Categories } from "@/components";

const Home = () => {
  return (
    <div className="px-4 md:px-4 lg:px-4 pt-16">
      <Hero />

      <Features />

      <Categories />

      <ContactUs />
    </div>
  );
};
export default Home;
