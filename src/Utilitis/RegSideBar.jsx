import React from "react";
import { Link, useLocation } from "react-router-dom";

const RegSideBar = ({
  styles,
  title,
  title2,
  title3,
  title4,
  title5,
  title6,
  title7,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
}) => {
  const { pathname } = useLocation();
  const date = new Date().getFullYear();
  const bukatPath = `/bukat${date}/bukat_login`;

  const isDbs =
    pathname === "/dbsform2021" ||
    pathname === "/dbsform/create_account" ||
    pathname === "/dbsform/login" ||
    pathname === "/dbsform/available_programme" ||
    pathname === "/dbsform/admission_requirements" ||
    pathname === "/dbsform/application_procedure";

  const isBukatLinks =
    pathname === bukatPath ||
    pathname === "/bukat2022/procedures" ||
    pathname === "/bukat2022/eligibility" ||
    pathname === bukatPath;

  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    fontSize: "1rem",
  };

  const spanStyle = { marginRight: "1rem", fontSize: "1.5rem" };
  return (
    <>
      <div style={styles.styleLeft}>
        <div className="py-2">
          <img
            src="https://mybuk2.buk.edu.ng/bukat2022/includes/buklogo.png"
            style={{ width: "3rem", height: "auto" }}
          />
          <span style={{ fontSize: "1.7rem", paddingLeft: ".4rem" }}>
            {title}
          </span>
        </div>
        <div style={{ paddingLeft: "1rem", marginTop: "2rem" }}>
          <p>
            <span style={spanStyle}>{icon1}</span>

            <Link
              style={linkStyle}
              to={
                isBukatLinks
                  ? "/bukat2022/procedures"
                  : isDbs
                  ? "/dbsform2021"
                  : "/bukdes/guidelines"
              }
            >
              {title2}
            </Link>
          </p>
          <p>
            <span style={spanStyle}>{icon2}</span>

            <Link
              style={linkStyle}
              to={
                isBukatLinks
                  ? "/bukat2022/eligibility"
                  : isDbs
                  ? "/dbsform/create_account"
                  : "/bukdes/bukdes_login"
              }
            >
              {title3}
            </Link>
          </p>
          <p>
            <span style={spanStyle}>{icon3}</span>

            <Link
              style={linkStyle}
              to={isBukatLinks ? bukatPath : isDbs ? "/dbsform/login" : ""}
            >
              {title4}
            </Link>
          </p>
          <p>
            <span style={spanStyle}>{icon4}</span>
            <Link
              style={linkStyle}
              to={
                isBukatLinks
                  ? bukatPath
                  : isDbs
                  ? "/dbsform/available_programme"
                  : ""
              }
            >
              {title5}
            </Link>
          </p>
          <p>
            <span style={spanStyle}>{icon5}</span>
            <Link
              style={linkStyle}
              to={
                isBukatLinks
                  ? bukatPath
                  : isDbs
                  ? "/dbsform/admission_requirements"
                  : ""
              }
            >
              {title6}
            </Link>
          </p>
          <p>
            <span style={spanStyle}>{icon6}</span>
            <Link
              style={linkStyle}
              to={
                isBukatLinks
                  ? bukatPath
                  : isDbs
                  ? "/dbsform/application_procedure"
                  : ""
              }
            >
              {title7}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegSideBar;
