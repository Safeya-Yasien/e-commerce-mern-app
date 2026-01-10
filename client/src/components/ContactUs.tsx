import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="px-4 py-16 bg-linear-to-b from-base-light to-mist-aqua-light dark:from-neutral-dark dark:to-mist-aqua-dark text-neutral-dark dark:text-base-light"
    >
      {/* Header */}
      <div className="text-center mx-auto mb-12 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 dark:text-base-light">
          Contact <span className="text-sunstone">Us</span>
        </h2>
        <p className="text-neutral-light dark:text-[#dcdcdc] max-w-2xl mx-auto">
          If you have any questions, feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left - Contact info cards */}
        <div className="flex flex-col gap-6">
          {[MapPin, Phone, Mail].map((Icon, idx) => (
            <div
              key={idx}
              className="group flex items-center p-6 rounded-3xl bg-base-light dark:bg-[#1a1a1a] shadow-md transition-all hover:shadow-xl hover:bg-sunstone hover:text-base-light"
            >
              <Icon className="w-6 h-6 dark:text-white " />
              <div className="ml-4 flex flex-col">
                <p className="font-semibold dark:text-[#f0f0f0]">
                  {idx === 0
                    ? "123 Main Street"
                    : idx === 1
                      ? "+1 (555) 123-4567"
                      : "info@eco.com"}
                </p>
                <p className="dark:text-[#bdbdbd] group-hover:dark:text-base-light">
                  {idx === 0 ? "New York, NY 10010" : "Mon to Fri, 9am - 6pm"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Form */}
        <div>
          <form className="flex flex-col gap-4 rounded-3xl p-6 bg-base-light dark:bg-[#1a1a1a] shadow-md">
            {["Name", "Email"].map((placeholder, idx) => (
              <input
                key={idx}
                type={placeholder === "Email" ? "email" : "text"}
                placeholder={placeholder}
                className="bg-base-light dark:bg-[#1a1a1a] p-3 rounded-lg border border-mist-aqua-light dark:border-[#a0dcdc] focus:border-sunstone focus:ring-2 focus:ring-sunstone outline-none w-full transition text-[#f0f0f0]"
              />
            ))}
            <textarea
              placeholder="Message"
              rows={5}
              className="resize-none bg-base-light dark:bg-[#1a1a1a] p-3 rounded-lg border border-mist-aqua-light dark:border-[#a0dcdc] focus:border-sunstone focus:ring-2 focus:ring-sunstone outline-none w-full text-[#f0f0f0] transition"
            />
            <button className="cursor-pointer mt-2 py-3 rounded-lg bg-sunstone hover:bg-[#b2288a] text-base-light transition duration-300 font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
