import React, { useState } from "react";
import { useLoaderData } from "react-router";
import TitleSection from "../Shared/TitleSection";
import AppCart from "../components/AppCart";
import ErrorPage from "./ErrorPage";

const Apps = () => {
  const appData = useLoaderData();
  const [search, setSearch] = useState("");
  console.log(appData);

  const searchData = appData.filter((app) =>
    app.title.toLowerCase().includes(search.toLocaleLowerCase()),
  );

  return (
    <div>
      <TitleSection
        heading="Our All Applications"
        title="Explore All Apps on the Market developed by us. We code for Millions"
      ></TitleSection>
      {/*search bar  */}
      <div className="flex justify-between mt-3">
        <h2 className="text-2xl font-bold">({appData.length})App Found</h2>
        <div>
          <label className="input p-2 text-2xl">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>
      </div>
      {/* end */}
      <div className="grid grid-cols-1 lg:grid-cols-4   gap-3 mt-3">
        {searchData.length > 0 ? (
          searchData.map((app) => <AppCart app={app}></AppCart>)
        ) : (
          <ErrorPage
            image="./assets/App-Error.png"
            heading="OPPS!! APP NOT FOUND"
            title="The App you are requesting is not found on our system.  please try another apps"
          ></ErrorPage>
        )}
      </div>
    </div>
  );
};

export default Apps;
