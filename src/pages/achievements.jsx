import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import INFO from "../data/user";

import "./styles/achievements.css";

const Achievements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Achievements`}</title>
      </Helmet>

      <div className="page-content">
        <NavBar active="achievements" />
        <div className="content-wrapper">
          <div className="achievement-logo-container">
            <div className="achievement-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="achievements-container">
            <div className="title achievements-title">
              Achievements and Awards
            </div>

            <div className="achievements-list">
              {INFO.achievements.map((achievement, index) => (
                <div className="achievement" key={index}>
                  <span className="highlight">{achievement.title}</span>{" "}
                  <br />
                  <span className="location"> {achievement.location}, {achievement.country}</span> 
                  <br />
                 <span className="position"> Position: {achievement.position} | {achievement.award}</span><br />
                  <span className="achievement-role">{achievement.role}</span>
                  <img
                    src={achievement.image}  
                    alt={achievement.title}
                    className="achievement-image"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="socials-container">
            <div className="achievements-socials">
              <Socials />
            </div>
          </div>

          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Achievements;
