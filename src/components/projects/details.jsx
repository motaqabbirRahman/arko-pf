import React from "react";
import ImageGallery from "react-image-gallery";

const Details = ({ id, logo, images, title, description }) => {
  return (
    
    <div className="details-page-container">
      <div className="details-main">
        <div className="details-left-side">
            {/* <div className="image-container"> */}
            {/* <ImageGallery items={images} /> */}
            {/* {logo && <img src={logo} alt={`${title} - Image 1`} />}  
          </div>
          <div className="image-container">
            {logo1 && <img src={logo1} alt={`${title} - Image 2`} />} 
          </div>
          <div className="image-container">
            {logo2   && <img src={logo2} alt={`${title} - Image 3`} />}   
          </div> */}
        </div>
        <div className="details-right-side">
          <h2 className="details-title">{title}</h2>
          <p className="details-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
