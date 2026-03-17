import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import HeroSection from "./HeroSection";

const AppCart = ({ app }) => {
  const { title, image, downloads, ratingAvg } = app;

  const formatDownload = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
  };

  return (
   
     <div className="card bg-base-100 shadow-2xl  rounded-2xl">
      {/* Image */}
      <figure className="h-60 w-full overflow-hidden rounded-t-2xl ">
        <img 
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain p-2  "
        />
      </figure>

      {/* Body */}
      <div className="px-4 pb-4">
        <h2 className="text-4xl font-semibold text-gray-700 line-clamp-1">
          {title}
        </h2>

        {/* Bottom */}
        <div className="flex justify-between mt-3 ">
          <span className="badge badge-success gap-1 text-xl px-6 py-4">
            <GoDownload /> {formatDownload(downloads)}
          </span>

          <span className="badge badge-warning gap-1 text-xl px-6 py-4">
            <FaStar /> {ratingAvg}
          </span>
        </div>
      </div>
    </div>
  
  
     
   
   
  );
};

export default AppCart;
