import { Link } from "react-router";
import { ArrowRight, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-charcoal text-mist-aqua min-h-[calc(100vh-3.5rem)] flex items-center justify-center pt-14 md:pt-0">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        {/* --- Highlight Badge --- */}
        <p className="inline-flex items-center text-sm font-semibold text-sunstone bg-deep-slate px-4 py-1 rounded-full border border-sunstone/50 mb-4 tracking-wider">
          <Leaf className="w-4 h-4 mr-2" aria-hidden="true" />
          ECO-FRIENDLY & SUSTAINABLE
        </p>

        {/* --- Main Heading --- */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-mist-aqua">
          Shop Smarter, <br className="hidden sm:inline" /> Live{" "}
          <span className="text-sunstone">Greener</span>
        </h1>

        {/* --- Subtitle/Description --- */}
        <p className="text-lg md:text-xl text-desert-taupe max-w-3xl mx-auto mb-10">
          Discover high-quality, ethically sourced products that are kind to the
          planet and elevate your daily life.
        </p>

        {/* --- Call to Action (CTA) Buttons --- */}
        <div className="flex justify-center space-x-4">
          {/* Primary CTA: Shop Now */}
          <Link
            to="/categories"
            className="flex items-center bg-crimson-tide text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-royal-plum transition duration-300 transform hover:scale-105"
          >
            Shop Now
            <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </Link>

          {/* Secondary CTA: Learn More */}
          <Link
            to="/about"
            className="flex items-center text-mist-aqua border-2 border-deep-slate font-bold py-3 px-8 rounded-lg hover:bg-deep-slate transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
