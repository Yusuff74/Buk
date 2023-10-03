import React from "react";
import { Link } from "react-router-dom";
import { BsJournals } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";
import RegHeader from "../Utilitis/RegHeader";
import RegSideBar from "../Utilitis/RegSideBar";
import ChangeWidth from "../Utilitis/HeaderStyles";
import BukatFooter from "../Utilitis/BukatFooter";

const BukdesLogin = () => {
  const states = ["Kano", "Katsina", "Kaduna", "Jigawa", "Gombe", "Adamawa"];
  const genders = ["Male", "Female"];
  const { styles, changeWidth } = ChangeWidth();
  const handleWidthChange = () => {
    changeWidth();
  };

  return (
    <>
      <div style={{ backgroundColor: "#eee" }}>
        <RegSideBar
          styles={styles}
          title="BUKDES 22"
          title2="Guidelines"
          title3="BUKDES Login"
          icon1={<BsJournals />}
          icon2={<BsFillSkipEndFill />}
        />
        <div style={styles.styleRight}>
          <RegHeader
            regTitle="Aptitude Test (BUKAT)"
            changeWidth={handleWidthChange}
          />
          <div
            style={{
              width: "94%",
              padding: "1rem",
              margin: "1rem auto",
              textAlign: "center",
              letterSpacing: "1px",
              backgroundColor: "rgba(38,185,154,0.88)",
              borderColor: "rgba(38,185,154,0.88)",
              borderRadius: ".7rem",
              color: "#fff",
              fontSize: "1rem",
            }}
          >
            <p>
              Payment for registration starts from Monday, 14 November 2022 to
              Friday, 13 January 2023.
            </p>
          </div>
          <form
            style={{
              textAlign: "center",
              margin: "0 auto",
              width: "80%",
              backgroundColor: "#fff",
              padding: "1rem",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div style={{ padding: "1rem" }}>
              <img
                src="https://mybuk2.buk.edu.ng/bukat2022/includes/buklogo.png"
                style={{ display: "block", margin: "0 auto" }}
              />
              <h3 style={{ padding: "0 4rem" }}>
                BAYERO UNIVERSITY KANO DIRECT ENTRY SCREENING (
                <span style={{ fontWeight: "550" }}>(BUKDES)</span>) ONLINE
                REGISTRATION
              </h3>
            </div>
            <hr />
            <div style={{ padding: "1rem 4rem", textAlign: "left" }}>
              <h4 className="text-center">Login</h4>
              <div style={{ marginLeft: "4rem" }}>
                <label htmlFor="utme-num" style={{ marginRight: "5%" }}>
                  DE Number
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
                <label htmlFor="utme-score" style={{ marginRight: "2%" }}>
                  State Of Origin
                </label>
                <select
                  style={{
                    width: "50%",
                    padding: ".5rem .3rem",
                    marginBottom: ".7rem",
                  }}
                >
                  <option value="">Select State Of Origin</option>
                  {states.map((state) => (
                    <option key={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div style={{ marginLeft: "4rem" }}>
                <label htmlFor="utme-score" style={{ marginRight: "9.2%" }}>
                  Gender
                </label>
                <select
                  style={{
                    width: "50%",
                    padding: ".5rem .3rem",
                  }}
                >
                  <option value="">Select State Of Origin</option>
                  {genders.map((gender) => (
                    <option key={gender}>{gender}</option>
                  ))}
                </select>
              </div>
            </div>
            <hr />
            <div>
              <button type="submit" className="btn btn-primary my-3 mx-5">
                reset
              </button>
              <button type="submit" className="btn btn-success my-3 mx-5">
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
          <BukatFooter />
        </div>
      </div>
    </>
  );
};

export default BukdesLogin;
