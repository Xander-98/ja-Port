import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
import Link from "@material-ui/core/Link";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <Link
          href="https://www.linkedin.com/in/jamesalexander98?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B85E45%2BBpRvyyb7bPXrDWUA%3D%3D"
          className="linkedIn"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
      </div>
      <p> &copy; 2023 made</p>
    </div>
  );
}

export default Footer;
