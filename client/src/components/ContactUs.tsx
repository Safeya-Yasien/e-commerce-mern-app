import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="px-4 py-16 bg-linear-to-r from-mist-aqua-light to-base-light dark:from-mist-aqua-dark dark:to-neutral-dark"
    >
      {/* Header */}
      <div className="text-center mx-auto mb-12 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Contact <span className="text-sunstone">Us</span>
        </h2>
        <p className="text-neutral-light dark:text-base-light max-w-2xl mx-auto">
          If you have any questions, feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left - Contact info cards */}
        <div className="flex flex-col gap-6">
          {/* Address */}
          <div className="flex items-center p-6 rounded-3xl bg-base-light dark:bg-neutral-dark shadow-md transition-all hover:shadow-xl hover:bg-sunstone hover:text-base-light">
            <MapPin className="w-6 h-6 " />
            <div className="ml-4 flex flex-col">
              <p className="font-semibold">123 Main Street</p>
              <p className="">New York, NY 10010</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center p-6 rounded-3xl bg-base-light dark:bg-neutral-dark shadow-md transition-all hover:shadow-xl hover:bg-sunstone hover:text-base-light">
            <Phone className="w-6 h-6" />
            <div className="ml-4 flex flex-col">
              <p className="font-semibold ">+1 (555) 123-4567</p>
              <p className="">Mon to Fri, 9am - 6pm</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center p-6 rounded-3xl bg-base-light dark:bg-neutral-dark shadow-md transition-all hover:shadow-xl hover:bg-sunstone hover:text-base-light">
            <Mail className="w-6 h-6 " />
            <div className="ml-4 flex flex-col">
              <p className="font-semibold ">info@eco.com</p>
              <p className="">Mon to Fri, 9am - 6pm</p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div>
          <form className="flex flex-col gap-4 rounded-3xl p-6 bg-base-light dark:bg-neutral-dark shadow-md">
            <input
              type="text"
              placeholder="Name"
              className="bg-base-light dark:bg-neutral-dark p-3 rounded-lg border border-mist-aqua-light dark:border-mist-aqua-dark focus:border-sunstone focus:ring-2 focus:ring-sunstone outline-none w-full transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-base-light dark:bg-neutral-dark p-3 rounded-lg border border-mist-aqua-light dark:border-mist-aqua-dark focus:border-sunstone focus:ring-2 focus:ring-sunstone outline-none w-full transition"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="resize-none bg-base-light dark:bg-neutral-dark p-3 rounded-lg border border-mist-aqua-light dark:border-mist-aqua-dark focus:border-sunstone focus:ring-2 focus:ring-sunstone outline-none w-full transition"
            />
            <button className="cursor-pointer mt-2 py-3 rounded-lg bg-sunstone hover:bg-primary-light text-base-light transition duration-300 font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
