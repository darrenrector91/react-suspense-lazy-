import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import backImage from "../images/banner.jpeg";
import "../styles/Banner.css";

const BannerImage = props => {
  return (
    <div>
      <img src={backImage} alt="" className="backImage"></img>
    </div>
  );
};

export default BannerImage;
