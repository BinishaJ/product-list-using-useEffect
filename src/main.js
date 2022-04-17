import React, { useEffect } from "react";
import "./index.css";
import displayProducts from "./display";

function Main() {
  const fetchData = () => {
    fetch("products.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then((data) => {
        displayProducts(data);
      })
      .catch((error) => console.error("FETCH ERROR:", error));
  };

  useEffect(() => {
    fetchData();
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <header id="header">
          <div className="logo">
            <img
              src={process.env.PUBLIC_URL + "logo.jpg"}
              alt="Logo"
              className="logoImg"
            />
            <h3 className="logoText">Ecommerce Website</h3>
          </div>
          <nav className="nav">
            <ul className="navbar">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#about-us">Contact Us</a>
              </li>
            </ul>
          </nav>
        </header>
        <div id="home"></div>
        <a href="#header">
          <div id="top">
            <i className="fa fa-arrow-up fa-2x" aria-hidden="true"></i>
          </div>
        </a>
        <footer id="about-us">
          <div className="flex1">
            <h3 className="title">Location</h3>
            <span className="footer">
              <i
                className="fa fa-map-marker fa-lg icons"
                aria-hidden="true"
              ></i>
              Kathmandu, Nepal
            </span>
            <span className="footer">
              <i className="fa fa-phone fa-lg icons" aria-hidden="true"></i>
              977-9841999999
            </span>
            <span className="footer">
              <i className="fa fa-envelope fa-lg icons" aria-hidden="true"></i>
              <a
                href="https://www.gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gmail"
              >
                Gmail
              </a>
            </span>
          </div>
          <div className="flex2">
            <h3 className="title">About Us</h3>
            <p className="footer">
              Our company is one of the well renowned company in the e-commerce
              industry. We provide 24/7 service and delivery facilities. If you
              want to shop anything we are available anytime for you anywhere at
              your convenience.
            </p>
          </div>
          <div className="flex3">
            <h3 className="title">Follow Us</h3>
            <span className="footer">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-facebook-official fa-lg footerIcon"
                  aria-hidden="true"
                ></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-instagram fa-lg footerIcon"
                  aria-hidden="true"
                ></i>
              </a>
              <br />
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-twitter fa-lg footerIcon"
                  aria-hidden="true"
                >
                  {" "}
                </i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa fa-linkedin fa-lg footerIcon"
                  aria-hidden="true"
                ></i>
              </a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Main;
