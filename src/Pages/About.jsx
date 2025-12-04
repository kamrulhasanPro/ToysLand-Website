import React from "react";
import aboutImg from "../assets/about.png";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-[#7e57c2] to-[#b39ddb] text-white p-4 rounded-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={aboutImg}
            alt="ToysLand Fun"
            className="rounded-xl rotate-y-180 w-full max-w-sm object-cover"
          />
        </div>

        <div className="md:flex-1 space-y-6">
          <h2 className="text-4xl font-bold">Welcome to ToysLand!</h2>
          <p className="text-lg text-gray-100">
            At ToysLand, we bring fun and learning together! Explore a wide
            variety of toys for kids of all ages – from educational games to
            exciting collectibles. Every toy is carefully selected to spark
            imagination and creativity.
          </p>
          <p className="text-lg text-gray-100">
            Our mission is to make playtime magical, safe, and unforgettable.
            Join thousands of happy kids and parents who trust ToysLand for
            quality toys and joyful experiences!
          </p>

          <Link to={'/category/0'} className="btn btn-primary text-white rounded-full ">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
