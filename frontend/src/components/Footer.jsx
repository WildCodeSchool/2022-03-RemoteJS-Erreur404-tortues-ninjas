import React from "react";
import "./Footer.css";
import logoFacebook from "../assets/facebook.svg";
import logoInsta from "../assets/instagram.svg";
import logoTwitter from "../assets/twitter.svg";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="images">
          <div className="img-social-media">
            <img src={logoFacebook} alt="logo facebook" />
          </div>
          <div className="img-social-media">
            <img src={logoInsta} alt="logo insta" />
          </div>
          <div className="img-social-media">
            <img src={logoTwitter} alt="logo twitter" />
          </div>
        </div>
        <div className="global-links">
          <div className="links">
            <p>Mentions légales</p>
          </div>
          <div className="links">
            <p>Politique de confidentialité</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
