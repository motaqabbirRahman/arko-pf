import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";

import "./styles/achievements.css";

// ... (your existing imports)

const Achievements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <React.Fragment>
      <Helmet>
        <title>{`achievements`}</title>
      </Helmet>

      <div className="page-content">
        <NavBar active="achievements" />
        <div className="content-wrapper">
          <div className="achievements-logo-container">
            <div className="achievements-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="achievements-container">
            <div className="title achievements-title">
              Achievements and Awards
            </div>

            <div className="achievements-list">
              <div className="achievement">
              <span className="highlight"># ROBOSUB 2023</span> {" "}
                <span className="style"></span>, San Diego, USA
                <br />
                Position: 2nd | Ingenuity Award <br/>
                <span className="achievement-role">
                  Core Team Member and Mechatronics Lead
                </span>
                {/* Image for ROBOSUB 2023 */}
                <img
                  src="../robusub.jpg"  // Replace with the actual image source
                  alt="ROBOSUB 2023"
                  className="achievement-image"
                />
              
              </div>

              <div className="achievement">
                <span className="highlight"># ROBOSUB 2022</span>, Maryland, USA
                  <br />
                  Best Rookie Team award for innovation <br/>
                  <span className="achievement-role">
                    Technical Advisor and Mentor
                  </span>
                {/* Image for ROBOSUB 2022 */}
                <img
                  src="../robusub2022.jpg"  // Replace with the actual image source
                  alt="ROBOSUB 2022"
                  className="achievement-image"
                />
                
              </div>

              <div className="achievement">
              <span className="highlight"># Singapore AUV Challenge 2018</span>, Singapore
                <br />
                Position: 7th
                <br />
                <span className="achievement-role">
                  Founding member and Mechatronics Lead
                </span>
                {/* Image for Singapore AUV Challenge 2018 */}
                <img
                  src="../singapore.jpg"  // Replace with the actual image source
                  alt="Singapore AUV Challenge 2018"
                  className="achievement-image"
                />
                
              </div>
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
