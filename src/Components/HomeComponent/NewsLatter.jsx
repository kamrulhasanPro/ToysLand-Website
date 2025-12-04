import React from "react";

const NewsLatter = () => {
  return (
        <section className="py-14 px-6 rounded-3xl mt-16 shadow-md"
      style={{
        background: "linear-gradient(135deg, #7e57c2, #b39ddb)", // primary + lighter gradient
      }}
    >
      <div className="max-w-3xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-2">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-200 mb-6">
          Get updates on new toys, special offers, and exclusive deals!
        </p>

        <form className="flex flex-col sm:flex-row items-center gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-white/30 outline-none shadow bg-white/10 text-white placeholder-white focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="bg-white/90 text-primary px-7 py-3 rounded-xl shadow hover:bg-white transition-all duration-300 font-semibold"
          >
            Subscribe
          </button>
        </form>

        
      </div>
    </section>

  );
};

export default NewsLatter;
