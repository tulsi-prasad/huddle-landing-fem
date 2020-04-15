import React from "react"
import "../styles/Header.css"
import logo from "../images/logo.svg"
import cover from "../images/illustration-mockups.svg"
import Button from "./Button";
import "../styles/Button.css"

const Header = ({ title, body }) => {
    return (
        <header className="header">
            <div className="header__logo-box">
                <img src={logo} alt="logo" className="header__logo"/>
            </div>
            <Button type="btn btn-white nav-btn">
                Try It Free
            </Button>
            <div className="content">
                <div className="title">{title}</div>
                <div className="body">{body}</div>
                <Button type="btn btn-pink">
                    Get Started For Free
                </Button>
            </div>
            <div className="cover">
                <img src={cover} alt="cover-img" className="cover__img" />
            </div>
        </header>
    )
}

export default Header;