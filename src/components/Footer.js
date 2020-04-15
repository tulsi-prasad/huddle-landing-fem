import React from "react";
import "../styles/Footer.css";
import logo from "../images/logo.svg";
import location from "../images/icon-location.svg";
import email from "../images/icon-email.svg";
import phone from "../images/icon-phone.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__details">
                <img src={logo} alt="company-logo" className="footer__logo" />
                <div className="footer__address">
                    <img src={location} alt="icon-location" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt et nihil blanditiis. Fugit.
                    </p>
                </div>
                <div className="footer__phone">
                    <img src={phone} alt="icon-phone" />
                    <p>+1-543-123-4567</p>
                </div>
                <div className="footer__email">
                    <img src={email} alt="icon-email" />
                    <p>example@huddle.com</p>
                </div>
            </div>
            <ul className="footer__lists">
                <div className="footer__lists_column-1">
                    <li className="footer__lists-item">
                        <span>About Us</span>
                    </li>
                    <li className="footer__lists-item">
                        <span>What We Do</span>
                    </li>
                    <li className="footer__lists-item">
                        <span>FAQ</span>
                    </li>
                </div>
                <div className="footer__lists_column-2">
                    <li className="footer__lists-item">
                        <span>Career</span>
                    </li>
                    <li className="footer__lists-item">
                        <span>Blog</span>
                    </li>
                    <li className="footer__lists-item">
                        <span>Contact Us</span>
                    </li>
                </div>
            </ul>
            <ul className="footer__icons">
                <li className="footer__icons-item">
                    <i class="fab fa-facebook-f icon"></i>
                </li>
                <li className="footer__icons-item">
                    <i class="fab fa-twitter icon"></i>
                </li>
                <li className="footer__icons-item">
                    <i class="fab fa-instagram icon"></i>
                </li>
            </ul>
            <div className="footer__copy">
                &copy; Copyright 2018 Huddle. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
