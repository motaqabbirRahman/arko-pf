import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import INFO from "../data/user";
import "./styles/detailsPage.css";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import ImageGallery from "react-image-gallery"; 
import "react-image-gallery/styles/css/image-gallery.css";


const DetailsPage = () => {
  const { id } = useParams();
  const project = INFO.projects.find((project) => project.id === id);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleLogoChange = (index) => {
    setCurrentLogoIndex(index);
  };

  return (
    <div className="page-content">
      <NavBar active="details" />
      <div className="content-wrapper">
        <div className="details-logo-container">
          <div className="details-logo">
            <Logo width={46} />
          </div>
        </div>

        <div className="details-container">
          <div className="details-main">
            <div className="details-right-side">
              <div className="title details-title">{project.title}</div>
              <div className="subtitle details-subtitle">{project.description}</div>
            </div>

            <div className="details-left-side">
              <div className="details-image-container">
                <div className="details-image-wrapper">
                  <ImageGallery
                    items={project.image.map((img, index) => ({
                      original: img.original,
                      thumbnail: img.thumbnail,
                    }))}
                    onSlide={handleLogoChange}
                  />
                </div>
              </div>

              <div className="details-socials">
                <Socials />
              </div>
            </div>
          </div>

          <div className="details-socials-mobile">
            <Socials />
          </div>
        </div>

        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
