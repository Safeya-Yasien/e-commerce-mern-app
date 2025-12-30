import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="py-16" id="contact">
      <div className="text-center mx-auto mb-12 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Contact <span className="text-accent">Us</span>
        </h2>
        <p className="text-mist-aqua max-w-2xl mx-auto ">
          If you have any questions, feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto ">
        {/* left */}

        <div className="flex flex-col gap-6">
          {/* address */}
          <div className="flex items-center p-4 rounded-3xl bg-desert-taupe shadow-md transition-all hover:shadow-xl ">
            <MapPin className="w-6 h-6  rounded-full text-base-100" />
            <div className="ml-4 flex flex-col">
              <p className="font-semibold">123 Main Street</p>
              <p className="text-base-100">New York, NY 10010</p>
            </div>
          </div>

          {/* phone */}
          <div className="flex items-center p-4 rounded-3xl bg-desert-taupe shadow-md transition-all hover:shadow-xl ">
            <Phone className="w-6 h-6  rounded-full" />
            <div className="ml-4 flex flex-col">
              <p className="text-base-100 font-semibold">+1 (555) 123-4567</p>
              <p className="text-base-100">Mon to Fri, 9am - 6pm</p>
            </div>
          </div>
          {/* email */}
          <div className="flex items-center p-4 rounded-3xl bg-desert-taupe shadow-md transition-all hover:shadow-xl ">
            <Mail className="w-6 h-6   rounded-full" />
            <div className="ml-4 flex flex-col">
              <p className="text-base-100 font-semibold">info@eco.com</p>
              <p className="text-base-100">Mon to Fri, 9am - 6pm</p>
            </div>
          </div>
        </div>

        {/* right */}
        <div>
          <form className="flex flex-col gap-4 rounded-3xl p-6 bg-desert-taupe">
            <input
              type="text"
              placeholder="Name"
              className="bg-base-100 p-2 rounded-lg focus-within:border-none focus:border-none outline-0 w-full "
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-base-100 p-2 rounded-lg focus-within:border-none focus:border-none outline-0 w-full "
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="resize-none bg-base-100 p-2 rounded-lg focus-within:border-none focus:border-none outline-0 w-full "
            />
            <button className="btn btn-primary rounded-lg">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;
