
import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCart = ({ app }) => {
  const { title, image, downloads, ratingAvg, id } = app;

  const formatDownload = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  return (
    <Link to={`/appsDetails/${id}`}>
      <div className="card bg-base-100 shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow cursor-pointer rounded-2xl overflow-hidden">
        
        {/* App Image */}
        <figure className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full p-3 transition-transform duration-300 hover:scale-105"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body p-4">
          <h2 className="text-2xl font-semibold text-gray-800 line-clamp-2">
            {title}
          </h2>
          
          {/* Downloads & Rating */}
          <div className="flex justify-between items-center mt-4">
            <span className="badge badge-success gap-1 text-sm px-3 py-1 flex items-center">
              <GoDownload /> {formatDownload(downloads)}
            </span>
            <span className="badge badge-warning gap-1 text-sm px-3 py-1 flex items-center">
              <FaStar /> {ratingAvg.toFixed(1)}
            </span>
          </div>

          {/* Optional action button */}
         
        </div>
      </div>
    </Link>
  );
};

export default AppCart;