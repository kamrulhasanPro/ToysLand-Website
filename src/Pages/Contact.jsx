import React from "react";

const Contact = () => {
  return (
    <section className=" text-white  px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">
          Contact Us
        </h2>

        <div className="bg-white text-gray-800 rounded-xl shadow-lg p-8 md:p-12">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="my-input w-full"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="my-input w-full"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message"
                rows="5"
                className="my-input w-full"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary text-white w-full"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-10 space-y-3 text-gray-700">
            <p>📍 123 Toys Street, Toy City, Bangladesh</p>
            <p>📧 support@toysland.com</p>
            <p>📞 +88018887-95795</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
