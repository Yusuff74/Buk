import React from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import Footer from "../common/Footer";

const ProgrammeFess = () => {
  const styles = { textDecoration: "none", fontSize: "1.5rem" };

  return (
    <>
      <MainHeader title="Programme, Fees and Charges" />
      <div style={{ backgroundColor: "#eee", padding: "10rem 5rem" }}>
        <p>
          <Link style={styles}>Undergraduate Programmes</Link>
        </p>
        <p>
          <Link style={styles}>Part-Time Undergraduate Programmes</Link>
        </p>
        <p>
          <Link style={styles}>Schools of Postgraduate Studies Programmes</Link>
        </p>
        <p>
          <Link style={styles}>Dangotte Business School Programmes</Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ProgrammeFess;
