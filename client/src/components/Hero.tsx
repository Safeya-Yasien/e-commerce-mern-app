import { Link } from "react-router";
import { ArrowRight, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-base-100 text-base-content min-h-[calc(100vh-3.5rem)] flex items-center justify-center pt-0 md:pt-14">
      <div className="w-full max-w-7xl mx-auto px-4 py-16 text-center">
        {/* Highlight Badge */}
        <p className="inline-flex items-center text-xs sm:text-sm font-semibold text-accent bg-neutral px-3 sm:px-4 py-1 rounded-full border border-accent/50 mb-4 tracking-wider">
          <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-2" aria-hidden="true" />
          ECO-FRIENDLY & SUSTAINABLE
        </p>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Shop Smarter,
          <br className="hidden sm:inline" /> Live{" "}
          <span className="text-accent">Greener</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 text-neutral dark:text-mist-aqua">
          Discover high-quality, ethically sourced products that are kind to the
          planet and elevate your daily life.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          {/* Primary CTA */}
          <Link
            to="/categories"
            className="flex items-center justify-center bg-primary text-base-100 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-secondary transition duration-300 sm:w-auto w-full"
          >
            Shop Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/about"
            className="flex items-center justify-center border-2 border-neutral font-bold py-3 px-8 rounded-lg hover:bg-neutral transition duration-300 sm:w-auto w-full"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
