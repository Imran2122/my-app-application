import React from "react";

const HeroSection = () => {
  return (
    <section className="py-20  bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12">
          Trusted by Millions, Built for You
        </h1>

        <div className="grid md:grid-cols-3  gap-8">
          <div className=" p-6 text-white ">
            <p className="">Total Product</p>
            <h1 className="text-3xl font-bold ">29.6M</h1>
            <p className="">21% more than last month</p>
          </div>

          <div className=" p-6 text-white ">
            <p className="">Total Users</p>
            <h1 className="text-3xl font-bold ">12.4M</h1>
            <p className="">15% more than last month</p>
          </div>

          <div className=" p-6 text-white ">
            <p className="">Revenue</p>
            <h1 className="text-3xl font-bold ">$8.2M</h1>
            <p className="">18% more than last month</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
