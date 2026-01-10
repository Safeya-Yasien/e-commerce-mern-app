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
    desc: "Every order arrives in 100 percent recyclable packaging to reduce waste.",
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
    <section className="px-4 py-20 bg-linear-to-b from-base-light to-mist-aqua-light dark:from-neutral-dark dark:to-mist-aqua-dark text-neutral-dark dark:text-base-light">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Why Choose <span className="text-sunstone">Us</span>
        </h2>
        <p className="text-neutral-light dark:text-base-light max-w-2xl mx-auto">
          We’re dedicated to offering products that respect the planet while
          delivering unmatched quality.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {featureList.map(({ title, desc, Icon }, i) => (
          <div
            key={i}
            className="bg-base-light dark:bg-neutral-dark rounded-xl p-6 shadow-md 
              transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Icon Circle */}
            <div className="flex justify-center mb-4">
              <div className="bg-sunstone/20 text-sunstone w-16 h-16 flex items-center justify-center rounded-full shadow-md transition-all group-hover:scale-110">
                <Icon className="w-8 h-8" />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-neutral-dark dark:text-base-light group-hover:text-sunstone transition-colors">
              {title}
            </h3>
            <p className="text-neutral-light dark:text-mist-aqua-dark text-sm leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Features;
