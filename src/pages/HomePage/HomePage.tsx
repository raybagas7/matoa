import { LocalStorage } from "../../utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { useEffect, useState } from "react";
import BannerContainer from "./BannerContainer";
import Discover from "./Discover";
import MonthDeals from "./MonthDeals";
import { useHomeProduct } from "../../store/homeProduct/useHomeProduct";
import LoadingBar from "../../Components/Custom/LoadingBar";
import RecentNews from "./RecentNews";
import SeriesContainer from "./SeriesContainer";
import Footer from "../../Components/FooterComponent/Footer";
import FlyingImage from "../../Components/Custom/FlyingImage/FlyingImage";

const HomePage = () => {
  const navigate = useNavigate();
  const localStg = new LocalStorage();
  const initialize = useHomeProduct.use.initialize();
  const resetState = useHomeProduct.use.resetState();
  const getDataProduct = useHomeProduct.use.getDataProduct();
  const imageUrl = [
    "https://res.cloudinary.com/dro3sbdac/image/upload/v1695896921/ufnwcakd3gtyezdc6dws.png",
    "https://res.cloudinary.com/dro3sbdac/image/upload/v1696092835/y3dnti56wrdus9jrw00i.png",
    "https://res.cloudinary.com/dro3sbdac/image/upload/v1696099350/cp22tryimheyl37nrshe.png",
  ];

  useEffect(() => {
    resetState();
    getDataProduct();
  }, [resetState, getDataProduct]);

  const onLogout = () => {
    localStg.removeUser();
    navigate("/entry");
  };

  if (initialize) {
    return (
      <div className="h-full w-full">
        <LoadingBar />
      </div>
    );
  }

  return (
    <>
      <div className="bg-light-bg text-primary-text">
        {/* <p className="absolute left-[810.92px] top-[1369.20px]">asd</p> */}
        <NavBar />
        <BannerContainer imageUrl={imageUrl} />
        <Discover />
        <MonthDeals />
        <RecentNews />
        <SeriesContainer />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
