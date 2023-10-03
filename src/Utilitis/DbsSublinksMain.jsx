import React, { useState } from "react";
import RegSideBar from "../Utilitis/RegSideBar";
import RegHeader from "../Utilitis/RegHeader";
import { FaHouseChimney } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { FaRightFromBracket } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { FaLandmark } from "react-icons/fa6";
import { FaFilePen } from "react-icons/fa6";
import ChangeWidth from "../Utilitis/HeaderStyles";
import DbsFooter from "./../Utilitis/DbsFooter";

const DbsSublinksMain = ({ children }) => {
  const { styles, changeWidth } = ChangeWidth();
  const handleWidthChange = () => {
    changeWidth();
  };

  return (
    <div
      style={{
        backgroundColor: "#ededed",
        minHeight: "100vh",
        color: "#73879C",
      }}
    >
      <RegSideBar
        styles={styles}
        title="DBSA'21"
        title2="Home"
        title3="Create Account"
        title4="Login"
        title5="Available Programmes"
        title6="Admission Requirements"
        title7="Application Procedure"
        icon1={<FaHouseChimney />}
        icon2={<FaUserPlus />}
        icon3={<FaRightFromBracket />}
        icon4={<FaGraduationCap />}
        icon5={<FaLandmark />}
        icon6={<FaFilePen />}
      />
      <div style={styles.styleRight}>
        <RegHeader
          regTitle="Dangotte Business School"
          subTitle="2021/2022 Application Excercise"
          changeWidth={handleWidthChange}
        />
        <div
          style={{
            backgroundColor: "#fff",
            margin: "2rem 5rem",
            padding: "1rem",
          }}
        >
          {children}
        </div>
      </div>
      <DbsFooter />
    </div>
  );
};

export default DbsSublinksMain;
