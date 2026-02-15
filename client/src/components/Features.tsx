import { Leaf, Recycle, ShieldCheck, Star } from "lucide-react";
import { memo } from "react";

const featureList = [
  {
    title: "Eco-Friendly Materials",
    desc: "All our products are crafted from sustainable and low-impact resources.",
    Icon: Leaf,
  },
  {
    title: "Recyclable Packaging",
    desc: "Every order arrives in 100% recyclable packaging to reduce waste.",
    Icon: Recycle,
  },
  {
    title: "Trusted Quality",
    desc: "We hand-pick suppliers who meet strict ethical and environmental standards.",
    Icon: ShieldCheck,
  },
  {
    title: "Top-Rated Products",
    desc: "Customers consistently rank our store as a leader in sustainable goods.",
    Icon: Star,
  },
];

const Features = memo(() => {
  return (
    <section
      className="px-4 py-20 bg-base-100 text-base-content transition-colors duration-300"
      id="features"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
          Why Choose <span className="text-primary">Us</span>
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
          We’re dedicated to offering products that respect the planet while
          delivering unmatched quality.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featureList.map(({ title, desc, Icon }, i) => (
          <div
            key={i}
            className="group bg-base-200 hover:bg-base-300 rounded-2xl p-8 shadow-sm 
                      transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-base-300/50"
          >
            <div className="flex mb-6">
              <div className="bg-primary/10 text-primary w-14 h-14 flex items-center justify-center rounded-2xl shadow-inner transition-transform group-hover:scale-110 group-hover:rotate-3">
                <Icon className="w-7 h-7" />
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-base-content/60 text-sm leading-relaxed group-hover:text-base-content/80 transition-colors">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

Features.displayName = "Features";
export default Features;
