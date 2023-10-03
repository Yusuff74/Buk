import React from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className="to-top"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          width: "60px",
          height: "60px",
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={scrollTop}
      >
        <BsArrowUpShort style={{ fontSize: "2rem" }} />
      </div>
      <footer
        className="container-fluid"
        style={{ backgroundColor: "#02669d", color: "#fff", padding: "5rem" }}
      >
        <div className="row">
          <div className="col-lg-4 text-center">
            <div className="logo">
              <img src="https://buk.edu.ng/sites/default/files/inline-images/buk-logo.png" />
            </div>
            <div className="description">
              <h3>BAYERO UNIVERSITY, KANO</h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.70)",
                  fontSize: ".8rem",
                  letterSpacing: "4px",
                }}
              >
                TO LEAD IN RESEARCH AND EDUCATION IN AFRICA
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-contact">
              <h4 style={{ letterSpacing: ".5rem", textAlign: "center" }}>
                CONTACT DETAILS
              </h4>
              <hr style={{ marginBottom: "3rem", marginTop: "1.5rem" }} />
              <p>
                <span>
                  <BsFillGeoAltFill style={{ marginRight: "1rem" }} />
                  PMB 3011, Gwarzo Road Kano, Nigeria.
                </span>
              </p>
              <p>
                <span>
                  <BsFillTelephoneFill style={{ marginRight: "1rem" }} /> Ph:
                  (+234) 816- 0107510
                </span>
              </p>

              <p>
                <span>
                  <BsFillEnvelopeFill style={{ marginRight: "1rem" }} />{" "}
                  registrar@buk.edu.ng
                </span>
              </p>
              <p>
                <span>
                  <BsFillEnvelopeFill style={{ marginRight: "1rem" }} />
                  mailbukinfo@buk.edu.ng
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="search">
              <span>
                <BsSearch />
              </span>
              <input
                type="text"
                placeholder="Search..."
                style={{
                  borderRadius: "2rem",
                  backgroundColor: "#fff",
                  color: "#eee",
                  width: "100%",
                  padding: "1rem 2rem 1rem 2.5rem",
                  border: "none",
                }}
              />
            </div>
            <div className="footer-links">
              <a href="#">
                <span>&gt;</span> HOME
              </a>
              <a href="#">
                <span>&gt;</span> ABOUT US
              </a>
              <a href="#">
                <span>&gt;</span> ACADEMICS
              </a>
              <a href="#">
                <span>&gt;</span> ADMISSIONS
              </a>
              <a href="#">
                <span>&gt;</span> CURRENT STUDENTS
              </a>
              <a href="#">
                <span>&gt;</span> UNITS
              </a>
              <a href="#">
                <span>&gt;</span> TETFUND INTERVENTIONS
              </a>
              <a href="#">
                <span>&gt;</span> CAREERS
              </a>
              <a href="#">
                <span>&gt;</span> UNITS
              </a>
              <a href="#">
                <span>&gt;</span> CALENDARS
              </a>
              <a href="#">
                <span>&gt;</span> PHYSICAL INFRASTRUCTURE / PROGRAMMS UPDATE
              </a>
              <a href="#">
                <span>&gt;</span> GIVING / DONATIONS
              </a>
              <a href="#">
                <span>&gt;</span> ICT SUPPORT
              </a>
              <a href="#">
                <span>&gt;</span> TEACHING PRACTICE
              </a>
              <a href="#">
                <span>&gt;</span> INSTITUTION-BASED RESEARCH
              </a>
              <a href="#">
                <span>&gt;</span> EQUIPMENT FABRICATION
              </a>
              <a href="#">
                <span>&gt;</span> ENTERPRENUERSHIP
              </a>
              <a href="#">
                <span>&gt;</span> ACADEMIC MANUSCRIPT DEVELOPMENT
              </a>
              <a href="#">
                <span>&gt;</span> ENTERPRISES
              </a>
              <a href="#">
                <span>&gt;</span> CONTACT US
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-span" style={{ padding: "2rem 6rem" }}>
          <span>TETFUND</span>
          <span>NUC</span>
          <span>MINISTRY OF EDUCATION</span>
          <span
            style={{
              backgroundColor: "#fff",
              display: "block",
              height: "3rem",
              width: "1px",
            }}
          ></span>
          <span>FACEBOOK</span>
          <span>YOUTUBE</span>
          <span>INSTAGRAM</span>
          <span>TWITTER</span>
        </div>
        <div className="container">
          <div
            className="copy-right"
            style={{
              color: "#9c9c9c",
              fontSize: ".8rem",
              letterSpacing: ".2rem",
            }}
          >
            COPYRIGHT © 2021 BAYERO UNIVERSITY, KANO. ALL RIGHTS RESERVED. |{" "}
            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: ".9rem",
              }}
            >
              SITEMAP
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
