import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaThList } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import { FaSign } from "react-icons/fa";
import RegHeader from "../Utilitis/RegHeader";
import RegSideBar from "../Utilitis/RegSideBar";
import ChangeWidth from "../Utilitis/HeaderStyles";

const BUKAT = () => {
  const navigate = useNavigate();
  const profileUpdate = (e) => {
    e.preventDefault();
    navigate("/Bukat/profileupdate");
  };
  const { styles, changeWidth } = ChangeWidth();
  const handleWidthChange = () => {
    changeWidth();
  };

  return (
    <>
      <div style={{ backgroundColor: "#eee" }}>
        <RegSideBar
          styles={styles}
          title="BUKAT 22"
          title2="Procedures"
          title3="Eligibility"
          title4="BUKAT Login"
          icon1={<FaThList />}
          icon2={<FaLockOpen />}
          icon3={<FaSign />}
        />
        <div style={styles.styleRight}>
          <RegHeader
            regTitle="Aptitude Test (BUKAT)"
            changeWidth={handleWidthChange}
          />
          <div
            style={{
              width: "94%",
              padding: "1rem 0",
              margin: "1rem auto",
              textAlign: "center",
              letterSpacing: "1px",
              backgroundColor: "rgba(231,76,60,0.88)",
              borderRadius: ".7rem",
              color: "#e9edef",
              fontSize: "1.5rem",
              fontWeight: "550",
            }}
          >
            <p>BUKAT REGISTRATION IS CLOSED</p>
          </div>
          <form
            style={{
              textAlign: "center",
              margin: "0 auto",
              width: "80%",
              backgroundColor: "#fff",
              padding: "1rem",
            }}
            onSubmit={profileUpdate}
          >
            <div style={{ padding: "1rem" }}>
              <img
                src="https://mybuk2.buk.edu.ng/bukat2022/includes/buklogo.png"
                style={{ display: "block", margin: "0 auto" }}
              />
              <h3 style={{ padding: "0 4rem" }}>
                BAYERO UNIVERSITY KANO APTITUDE TEST (
                <span style={{ fontWeight: "550" }}>BUKAT</span>) ONLINE
                REGISTRATION
              </h3>
            </div>
            <hr />
            <div style={{ padding: "1rem 4rem", textAlign: "left" }}>
              <h4 className="text-center">Login</h4>
              <div style={{ marginLeft: "4rem" }}>
                <label htmlFor="utme-num" style={{ marginRight: "5%" }}>
                  UTME Number
                </label>
                <input
                  type="text"
                  id="utme-num"
                  placeholder="UTME NUMBER"
                  style={{
                    width: "50%",
                    padding: ".5rem .3rem",
                    marginBottom: ".7rem",
                  }}
                />
              </div>
              <div style={{ marginLeft: "4rem" }}>
                <label htmlFor="utme-score" style={{ marginRight: "7.4%" }}>
                  UTME Score
                </label>
                <input
                  type="text"
                  id="utme-score"
                  placeholder="UTME SCORE"
                  style={{
                    width: "50%",
                    padding: ".5rem .3rem",
                  }}
                />
              </div>
            </div>
            <hr />
            <div>
              <button type="submit" className="btn btn-primary my-3">
                Login
              </button>
            </div>
            <div>
              <p style={{ margin: "0" }}>
                Please send any enquiry to the following email address
              </p>
              <p>
                <Link
                  style={{
                    textDecoration: "none",
                    fontSize: "1.5rem",
                    fontWeight: "550",
                    color: "#5A738E",
                  }}
                >
                  bukat.registration@buk.edu.ng
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BUKAT;
