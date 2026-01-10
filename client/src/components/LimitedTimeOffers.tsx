import { Link } from "react-router";
import { ShoppingBag } from "lucide-react";
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
    <section className="px-4 py-20 text-neutral-dark dark:text-base-light dark:bg-linear-to-r dark:from-[#0f1112] dark:to-[#1a1a1a]">
      {/* Section Header */}
      <div className="text-center mx-auto mb-12 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Limited <span className="text-sunstone">Time</span> Offers
        </h2>
        <p className="text-neutral-light dark:text-[#f0f0f0] font-medium">
          Get 50% off on all products
        </p>
      </div>

      {/* Countdown */}
      <CountdownTimer />

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-base-light dark:bg-[#1a1a1a] rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl group"
          >
            <Link to={"/"} className="relative overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {product.tag && (
                <span className="absolute top-3 left-3 bg-sunstone text-base-light text-xs font-semibold px-2 py-1 rounded shadow-md">
                  {product.tag}
                </span>
              )}
            </Link>
            <div className="p-4 flex flex-col justify-between h-44">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary-light dark:text-[#b2288a] transition-colors group-hover:dark:text-sunstone">
                  {product.name}
                </h3>
                <p className="line-clamp-2 text-sm text-neutral-dark dark:text-[#dcdcdc] group-hover:dark:text-base-light">
                  {product.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-primary-light dark:text-[#b2288a] font-bold text-lg group-hover:dark:text-sunstone">
                  {product.price}
                </p>
                <button className="flex items-center gap-1 bg-primary-light dark:bg-[#b2288a] cursor-pointer hover:bg-primary-dark dark:hover:bg-[#e68815] text-base-light py-2 px-3 rounded-lg font-semibold transition-colors text-sm shadow-md">
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
