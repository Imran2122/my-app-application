/* eslint-disable no-unused-vars */
import React from "react";
import AppCart from "./AppCart";
import { Link, useNavigate } from "react-router";

const TrendingApp = ({ appData }) => {
 
  const navigate = useNavigate();
  return (
    <div>
      <h3 className="text-3xl mt-2">This is tendy:{appData.length}</h3>
      <div className="grid md:grid-cols-4  gap-4">
        {appData.slice(0, 8).map((app) => (
          <AppCart key={app.id} app={app}></AppCart>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link
            navigate to='/apps'
          className="btn px-16 py-8 bg-fuchsia-600 text-white font-bold"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default TrendingApp;
