import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { addToStoreDB } from "../utility/addToDB";
import toast from "react-hot-toast";
import { useState } from "react";

const AppDetails = () => {
  const { id } = useParams();
  console.log(id);
  const appData = useLoaderData();
  const [isInstalled, setIsInstalled] = useState(false);

  const singleAppDetails = appData.find((apps) => apps.id === parseInt(id));

  const formatDownload = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  const ratingData = singleAppDetails.ratings.map((item) => ({
    name: item.name,
    count: item.count,
  }));

  const handleInstall = (id) => {
    const result = addToStoreDB(id);

    if (result) {
      toast.success("App Installed Successfully ✅");
      setIsInstalled(true);
    } else {
      toast.error("Already Installed ❌");
    }

    setIsInstalled(true);
  };

  return (
    <div className="max-w-5xl lg:max-w-full  mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10 mt-6 md:mt-12">
      {/* TOP */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* IMAGE */}
        <img
          src={singleAppDetails.image}
          className="w-32 h-32 md:w-40 md:h-40 object-cover bg-gray-100 p-4 rounded-2xl mx-auto md:mx-0"
          alt={singleAppDetails.title}
        />

        {/* RIGHT */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            {singleAppDetails.title}
          </h1>

          <p className="text-base md:text-xl text-gray-500 mb-4 md:mb-6">
            Developed by{" "}
            <span className="text-indigo-600 font-semibold">
              {singleAppDetails.companyName}
            </span>
          </p>

          <hr className="mb-4 md:mb-6" />

          {/* STATS */}
          <div className="flex justify-between md:justify-start md:gap-20 mb-6">
            <div>
              <FaDownload className="text-green-600 text-xl md:text-3xl mb-1 mx-auto md:mx-0" />
              <p className="text-gray-400 text-sm md:text-lg">Downloads</p>
              <p className="font-bold text-lg md:text-2xl">
                {formatDownload(singleAppDetails.downloads)}
              </p>
            </div>

            <div>
              <FaStar className="text-orange-500 text-xl md:text-3xl mb-1 mx-auto md:mx-0" />
              <p className="text-gray-400 text-sm md:text-lg">Rating</p>
              <p className="font-bold text-lg md:text-2xl">
                {singleAppDetails.ratingAvg}
              </p>
            </div>

            <div>
              <AiOutlineLike className="text-purple-600 text-xl md:text-3xl mb-1 mx-auto md:mx-0" />
              <p className="text-gray-400 text-sm md:text-lg">Reviews</p>
              <p className="font-bold text-lg md:text-2xl">
                {formatDownload(singleAppDetails.reviews)}
              </p>
            </div>
          </div>

          {/* BUTTON */}
          {/* <button
            disabled={isInstalled}
          onClick={()=>handleInstall(id)} className="w-full md:w-auto bg-green-500 hover:bg-green-600 transition text-white text-lg md:text-xl px-8 py-3 md:py-4 rounded-2xl font-semibold">
            Install Now ({singleAppDetails.size} MB)
          </button> */}

          <button
            onClick={() => handleInstall(id)}
            disabled={isInstalled}
            className={`w-full md:w-auto transition text-white text-lg md:text-xl px-8 py-3 md:py-4 rounded-2xl font-semibold ${
              isInstalled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isInstalled
              ? "Installed"
              : `Install Now (${singleAppDetails.size} MB)`}
          </button>

          {/* CHART */}
          <div className="mt-8 md:mt-10">
            <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4">
              Rating Distribution
            </h2>

            <ResponsiveContainer width="100%" height={220} md:height={320}>
              <BarChart layout="vertical" data={ratingData}>
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="name"
                  width={70}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip />
                <Bar dataKey="count" fill="#6366F1" radius={[0, 10, 10, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <hr className="my-8 md:my-10" />

      <p className="text-base md:text-xl text-gray-600 leading-7 md:leading-9 text-center md:text-left">
        {singleAppDetails.description}
      </p>
    </div>
  );
};

export default AppDetails;
