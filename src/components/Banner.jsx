import React from "react";
import { Link } from "react-router";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStore } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-gray-100">
      <section className="">
        <div className="sm:px-6 sm:py-24">
          <div className="mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              We Build <br />
              <strong className="text-indigo-600"> Productive </strong>
              Apps
            </h1>

            <p className="mt-4 text-base text-gray-700 sm:text-lg/relaxed">
              AtHERO.IO we craft innovative apps designed to make everyday life
              simpler, smarter, and more <br /> Our goal is to turn your ideas
              into digital experiences that truly make an impact.
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <div className="flex">
                <Link
                  to="/products"
                  className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
                >
                  <BiLogoPlayStore size={22} />
                  Google Play
                </Link>
              </div>

              <div className="flex">
                <Link
                  to="/about"
                  className="flex items-center justify-center gap-2 border px-6 py-3 rounded-lg hover:bg-white transition"
                >
                  <FaAppStore size={20} />
                  App Store
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <img src="/assets/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
