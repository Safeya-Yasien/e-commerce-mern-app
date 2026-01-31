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
    <section id="contact" className="px-4 py-16">
      {/* Header */}
      <div className="text-center mx-auto mb-12 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-base-content">
          Contact <span className="text-primary">Us</span>
        </h2>
        <p className="text-base-content/70 max-w-2xl mx-auto">
          If you have any questions, feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left - Contact info cards */}
        <div className="flex flex-col gap-6">
          {contactInfo.map(({ Icon, title, subtitle }, idx) => (
            <div
              key={idx}
              className="group flex items-center p-6 rounded-3xl bg-base-200 dark:bg-base-300 shadow-md transition-all hover:shadow-xl hover:bg-primary hover:text-primary-content"
            >
              <Icon className="w-6 h-6 text-base-content group-hover:text-primary-content transition" />
              <div className="ml-4 flex flex-col">
                <p className="font-semibold">{title}</p>
                <p className="text-base-content/70 group-hover:text-primary-content transition">
                  {subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Form */}
        <div>
          <form className="flex flex-col gap-4 rounded-3xl p-6 bg-base-200 dark:bg-base-300 shadow-md">
            {["Name", "Email"].map((placeholder, idx) => (
              <input
                key={idx}
                type={placeholder === "Email" ? "email" : "text"}
                placeholder={placeholder}
                className="bg-base-100 dark:bg-base-200 p-3 rounded-lg border border-base-300 dark:border-base-200 focus:border-primary focus:ring-2 focus:ring-primary outline-none w-full transition text-base-content"
              />
            ))}
            <textarea
              placeholder="Message"
              rows={5}
              className="resize-none p-3 rounded-lg border border-base-300 dark:border-base-200 focus:border-primary focus:ring-2 focus:ring-primary outline-none w-full text-base-content bg-base-100 dark:bg-base-200 transition"
            />
            <button className="cursor-pointer mt-2 py-3 rounded-lg bg-primary hover:bg-secondary text-primary-content transition duration-300 font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
