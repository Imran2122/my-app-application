import React, { use } from "react";
import Banner from "./Banner";
import HeroSection from "./HeroSection";
import TitleSection from "../Shared/TitleSection";
import TrendingApp from "./TrendingApp";



const Home = ({loadData}) => {
    const appData=use(loadData)
   

  return (
    <div>
      {/* banner */}
      <Banner></Banner>
      <HeroSection></HeroSection>

      <TitleSection
        heading="Trending Apps"
        title="Explore All Trending Apps on the Market developed by us"
      />
      <TrendingApp appData={appData}></TrendingApp>
      {/* appp pge */}
    </div>
  );
};

export default Home;
