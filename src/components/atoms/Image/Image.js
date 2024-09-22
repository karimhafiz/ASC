import React from "react";
import "./Image.css";
import { useNavigate } from "react-router-dom";

const Image = ({ src, alt, className }) => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <img src={src} alt={alt} className={className} onClick={navigateHome} />
  );
};

export default Image;
