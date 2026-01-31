import { Link } from "react-router";
import { ArrowRight, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="bg-base-100 text-base-content flex items-center justify-center"
      id="hero"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="inline-flex items-center text-xs sm:text-sm font-semibold text-primary bg-base-200 px-3 sm:px-4 py-1 rounded-full border border-primary/30 mb-4 tracking-wider">
          <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-2" aria-hidden="true" />
          ECO-FRIENDLY & SUSTAINABLE
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Shop Smarter,
          <br className="hidden sm:inline" /> Live{" "}
          <span className="text-primary">Greener</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 text-base-content/80">
          Discover high-quality, ethically sourced products that are kind to the
          planet and elevate your daily life.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            to="/#categories"
            className="flex items-center justify-center bg-primary text-primary-content hover:bg-secondary font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 sm:w-auto w-full"
          >
            Shop Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          <Link
            to="/"
            className="flex items-center justify-center border-2 border-primary text-base-content font-bold py-3 px-8 rounded-lg hover:bg-primary hover:text-primary-content transition duration-300 sm:w-auto w-full"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
