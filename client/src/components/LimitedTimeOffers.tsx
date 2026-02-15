import { Link } from "react-router";
import { ShoppingBag, Timer } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const LimitedTimeOffers = () => {
  const products = [
    {
      id: 1,
      name: "Reusable Bamboo Bottle",
      description: "Stay hydrated with this eco-friendly bamboo bottle.",
      price: "$25",
      img: "/images/bottle.jpg",
      tag: "Eco",
    },
    {
      id: 2,
      name: "Organic Cotton Tote",
      description:
        "Carry your essentials in style with this organic cotton tote.",
      price: "$18",
      img: "/images/tote.jpg",
      tag: "New",
    },
    {
      id: 3,
      name: "Solar-Powered Lamp",
      description:
        "Illuminate your space with this energy-efficient solar lamp.",
      price: "$45",
      img: "/images/lamp.jpg",
      tag: "Eco",
    },
    {
      id: 4,
      name: "Biodegradable Phone Case",
      description:
        "Protect your phone and the planet with this biodegradable case.",
      price: "$30",
      img: "/images/phone-case.jpg",
      tag: "Eco",
    },
  ];

  return (
    <section
      className="px-4 py-20 bg-base-200 text-base-content transition-colors duration-300"
      id="offers"
    >
      {/* Section Header */}
      <div className="text-center mx-auto mb-12 max-w-7xl">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Timer className="w-6 h-6 text-secondary animate-pulse" />
          <span className="text-secondary font-bold tracking-widest text-sm uppercase">
            Don't Miss Out
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          Limited <span className="text-primary">Time</span> Offers
        </h2>
        <div className="badge badge-secondary badge-lg py-4 px-6 font-bold shadow-lg">
          🔥 Get 50% OFF Today
        </div>
      </div>

      {/* Countdown - Make sure this uses daisyUI 'countdown' class internally */}
      <div className="mb-16">
        <CountdownTimer />
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 shadow-sm hover:shadow-2xl transition-all duration-500 group border border-base-300/50 overflow-hidden"
          >
            <Link to={"/"} className="relative block h-60 overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {product.tag && (
                <span className="absolute top-3 left-3 badge badge-primary font-bold shadow-md z-10">
                  {product.tag}
                </span>
              )}
              {/* Sale Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="btn btn-sm btn-white no-animation">
                  Quick View
                </span>
              </div>
            </Link>

            <div className="card-body p-5">
              <h3 className="card-title text-lg font-bold group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-base-content/60 line-clamp-2">
                {product.description}
              </p>

              <div className="card-actions justify-between items-center mt-4">
                <div className="flex flex-col">
                  <span className="text-xs line-through text-base-content/40">
                    $50.00
                  </span>
                  <span className="text-xl font-black text-secondary">
                    {product.price}
                  </span>
                </div>
                <button className="btn btn-primary btn-sm md:btn-md gap-2 rounded-lg shadow-md  active:scale-95 transition-all">
                  <ShoppingBag className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LimitedTimeOffers;
