import React, { useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import "./styles/exploration.css";

const Exploration = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Exploration`}</title>
      </Helmet>

      <div className="page-content">
        <NavBar active="exploration" />
        <div className="content-wrapper">
          <div className="explorations-logo-container">
            <div className="explorations-logo">
              <Logo width={46} />
            </div>
          </div>
          <div className="explorations-container">
            <div className="title contact-title">Life in Frames</div>

            <div className="explorations-list">
              <div className="magazine-grid">
                {INFO.explorationInfo.map((image, index) => (
                  <div key={index} className="magazine-item">
                    <img
                      src={image.filename}
                      alt={image.title}
                      onClick={() => openLightbox(image.filename)}
                    />
                    <div className="image-description">
                      {image.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lightbox */}
          {selectedImage && (
            <div className="lightbox" onClick={closeLightbox}>
              <div className="lightbox-content">
                <span className="lightbox-close" onClick={closeLightbox}>
                  &times;
                </span>
                <img src={selectedImage} alt="Zoomed Image" />
              </div>
            </div>
          )}

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Exploration;
