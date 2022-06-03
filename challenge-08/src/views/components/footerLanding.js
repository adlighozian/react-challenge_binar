import React from "react";

import facebook from "../../assets/img/icon_facebook.svg";
import instagram from "../../assets/img/icon_instagram.svg";
import twitter from "../../assets/img/icon_twitter.svg";
import mail from "../../assets/img/icon_mail.svg";
import twitch from "../../assets/img/icon_twitch.svg";
import logo from "../../assets/img/logo.svg";

import "../../assets/css/components/footerLanding.css";

function FooterBar() {
  return (
    <section>
      <section className="footer">
        <div className="kotak d-flex">
          <div className="box p1 d-flex flex-column justify-content-between">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="box p2 d-flex flex-column justify-content-between">
            <p>Our services</p>
            <p>Why Us</p>
            <p>Testimonial</p>
            <p>FAQ</p>
          </div>
          <div className="box">
            <p>Connect with us</p>
            <div className="icon d-flex">
              <img src={facebook}></img>
              <img src={instagram}></img>
              <img src={twitter}></img>
              <img src={mail}></img>
              <img src={twitch}></img>
            </div>
          </div>
          <div className="box">
            <p>Copyright Binar 2022</p>
            <img src={logo}></img>
          </div>
        </div>
      </section>
    </section>
  );
}

export default FooterBar;
