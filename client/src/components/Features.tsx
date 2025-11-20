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
    <section className="py-20 text-base-content">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Why Choose <span className="text-accent">Us</span>
        </h2>
        <p className="text-neutral dark:text-mist-aqua max-w-2xl mx-auto">
          We’re dedicated to offering products that respect the planet while
          delivering unmatched quality.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {featureList.map(({ title, desc, Icon }, i) => (
          <div
            key={i}
            className="bg-base-200 rounded-xl p-6 shadow-md 
            transition-all duration-300 
            hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl"
          >
            <div className="flex justify-center mb-4">
              <Icon className="w-10 h-10 text-primary" />
            </div>

            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-neutral dark:text-mist-aqua text-sm leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Features;
