import React from "react";
import Image from "../../atoms/Image/Image";
import AscLogo from "../../../assets/ASC_Logo/AscBrown.png";

const Logo = () => {
  return (
    <Image
      src={AscLogo}
      alt="Ayendah Sazan Community Logo"
      className="logo-image"
    />
  );
};

export default Logo;
