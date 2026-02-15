import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  const contactInfo = [
    {
      Icon: MapPin,
      title: "123 Main Street",
      subtitle: "New York, NY 10010",
    },
    {
      Icon: Phone,
      title: "+1 (555) 123-4567",
      subtitle: "Mon to Fri, 9am - 6pm",
    },
    {
      Icon: Mail,
      title: "info@eco.com",
      subtitle: "We reply within 24 hours",
    },
  ];

  return (
    <section
      id="contact"
      className="px-4 py-20 bg-base-100 transition-colors duration-300"
    >
      {/* Header */}
      <div className="text-center mx-auto mb-16 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
          Contact <span className="text-primary">Us</span>
        </h2>
        <p className="text-base-content/60 max-w-xl mx-auto text-lg">
          Have questions about our sustainable products? We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left - Contact info cards */}
        <div className="flex flex-col gap-4">
          {contactInfo.map(({ Icon, title, subtitle }, idx) => (
            <div
              key={idx}
              className="flex items-center p-6 rounded-2xl bg-base-200 border border-transparent hover:border-primary/20 hover:bg-base-300 transition-all duration-300"
            >
              {/* Icon Container with subtle tint */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Icon className="w-6 h-6" />
              </div>
              <div className="ml-6">
                <p className="font-bold text-lg text-base-content">{title}</p>
                <p className="text-base-content/60">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card bg-base-200 shadow-xl border border-base-300/50">
          <form
            className="card-body gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name Input */}
            <div className="form-control">
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered bg-base-100 border-base-300 focus:border-primary focus:outline-none text-base-content placeholder:text-base-content/40 transition-all w-full"
              />
            </div>

            {/* Email Input */}
            <div className="form-control">
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered bg-base-100 border-base-300 focus:border-primary focus:outline-none text-base-content placeholder:text-base-content/40 transition-all w-full"
              />
            </div>

            {/* Message Area */}
            <div className="form-control">
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="textarea textarea-bordered bg-base-100 border-base-300 focus:border-primary focus:outline-none text-base-content placeholder:text-base-content/40 transition-all w-full resize-none"
              />
            </div>

            {/* Submit Button */}
            <button className="btn btn-primary font-bold shadow-md hover:shadow-primary/20 transition-all ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
