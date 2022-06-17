import React from "react";
import "./aboutSection.css";
import { Button, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/handy__mart";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <h1>About Us</h1>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/handymart/image/upload/v1652348099/avatars/avatarmain_wtpcxj.jpg"
              alt="Founder"
            />
            <p>HandyMart Team</p>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is an Ecommerce website to buy and sell Handy Craft Items.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <h2>Our Brands</h2>

            <a href="https://instagram.com/handy__mart" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
