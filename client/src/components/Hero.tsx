import { Link } from "react-router";
import { ArrowRight, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="bg-base-200 text-base-content min-h-[80vh] flex items-center justify-center transition-colors duration-500"
      id="hero"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-16 text-center">
        <p className="inline-flex items-center text-xs sm:text-sm font-semibold text-primary bg-base-100 px-3 sm:px-4 py-1.5 rounded-full shadow-sm border border-primary/20 mb-6 tracking-wider">
          <Leaf className="w-3 h-3 sm:w-4 sm:h-4 mr-2" aria-hidden="true" />
          ECO-FRIENDLY & SUSTAINABLE
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
          Shop Smarter,
          <br className="hidden sm:inline" /> Live{" "}
          <span className="text-primary italic">Greener</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 text-base-content/70 leading-relaxed">
          Discover high-quality, ethically sourced products that are kind to the
          planet and elevate your daily life. Join the green revolution today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/#categories"
            className="btn btn-primary btn-lg px-10 shadow-xl group"
          >
            Shop Now
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link to="/" className="btn btn-outline btn-primary btn-lg px-10">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
