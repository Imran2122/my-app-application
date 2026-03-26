import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreApp } from "../utility/addToDB";
import TitleSection from "../Shared/TitleSection";
import InstalledAppCard from "../components/InstalledAppCard";

const InstalledApps = () => {
  const data = useLoaderData();
  const [apps, setApps] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storeInstallData = getStoreApp();

    const convertedStoreApp = storeInstallData.map((id) => parseInt(id));

    const myDownloadApp = data.filter((app) =>
      convertedStoreApp.includes(app.id),
    );

    setApps(myDownloadApp);
  }, [data]);

  const handleSort = (type) => {
    setSort(type);

    if (type == "rating") {
      const sorted = [...apps].sort((a, b) => b.ratingAvg - a.ratingAvg);
      setApps(sorted);
    } else if (type == "size") {
      const sorted = [...apps].sort((a, b) => b.size - a.size);
      setApps(sorted);
    }
  };

  return (
    <div>
      <TitleSection
        heading="Your Installed Apps"
        title="Explore All Trending Apps on the Market developed by us"
      ></TitleSection>

      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">{apps.length} (Apps Found)</h1>
        <details className="dropdown">
          <summary className="btn m-1">sort by:{sort ? sort : ""}</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("size")}>size</a>
            </li>
            <li>
              <a onClick={() => handleSort("ratings")}>rating</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="flex flex-col gap-4   mt-6">
        {apps.map((app) => (
          <InstalledAppCard app={app} key={app.id}></InstalledAppCard>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
