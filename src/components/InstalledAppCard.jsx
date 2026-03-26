import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const InstalledAppCard = ({ app, handleUnInstall }) => {
  const { image, title, downloads, ratingAvg, size, id } = app;
  console.log(ratingAvg);

  return (
    <div className="flex items-center justify-between bg-base-100 shadow-2xl rounded-xl p-4 mb-3">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-20 h-20 rounded-lg border-2 p-1 object-cover bg-gray-200"
        />

        {/* Info */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>

          <div className="flex gap-4 text-sm mt-1">
            <span className="text-green-500 text-xl flex items-center gap-1">
              <FaDownload /> {downloads}
            </span>

            <span className="text-orange-500 text-xl font-semibold flex items-center gap-1">
              <FaStar /> {ratingAvg}
            </span>

            <span className="text-gray-400 flex text-xl items-center">
              {size} MB
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => handleUnInstall(id)}
        className="btn btn-success btn-sm text-white"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppCard;
