import { Link } from "react-router";
import { ArrowRight, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-base-100 text-base-content min-h-[calc(100vh-3.5rem)] flex items-center justify-center pt-14 md:pt-0">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        {/* Highlight Badge */}
        <p className="inline-flex items-center text-sm font-semibold text-accent bg-neutral px-4 py-1 rounded-full border border-accent/50 mb-4 tracking-wider">
          <Leaf className="w-4 h-4 mr-2" aria-hidden="true" />
          ECO-FRIENDLY & SUSTAINABLE
        </p>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-base-content">
          Shop Smarter, <br className="hidden sm:inline" /> Live{" "}
          <span className="text-accent">Greener</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-neutral dark:text-mist-aqua max-w-3xl mx-auto mb-10">
          Discover high-quality, ethically sourced products that are kind to the
          planet and elevate your daily life.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4">
          {/* Primary CTA */}
          <Link
            to="/categories"
            className="flex items-center bg-primary text-base-100  font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-secondary transition duration-300 transform hover:scale-105"
          >
            Shop Now
            <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/about"
            className="flex items-center border-2 border-neutral text- font-bold py-3 px-8 rounded-lg hover:bg-neutral transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
