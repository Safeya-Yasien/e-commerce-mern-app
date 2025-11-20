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
    <div className="py-20 text-base-content">
      <div className="text-center mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          {" "}
          Limited Time Offers
        </h2>
        <p> Get 50% off on all products</p>
      </div>

      <CountdownTimer />

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            to={"/"}
            key={product.id}
            className="bg-base-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              {product.tag && (
                <span className="absolute top-3 left-3 bg-accent text-base-100 text-xs font-semibold px-2 py-1 rounded">
                  {product.tag}
                </span>
              )}
            </div>
            <div className="p-4 flex flex-col justify-between h-40">
              <div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="line-clamp-2 text-sm">{product.description}</p>
              </div>
              <div className="flex items-center  justify-between">
                <p className="text-primary font-bold text-lg ">
                  {product.price}
                </p>
                <button className="flex items-center gap-1 bg-primary text-base-100 py-1 p-2 rounded-lg font-semibold hover:bg-secondary transition text-sm">
                  <ShoppingBag className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default LimitedTimeOffers;
