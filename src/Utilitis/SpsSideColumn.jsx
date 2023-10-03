import React from "react";

const SpsSideColumn = () => {
  return (
    <>
      <div
        className="col text-center"
        style={{
          marginTop: "2rem",
          position: "relative",
          backgroundColor: "#EEEEEE",
          border: "1px solid #aaaaaa",
          boxShadow: "1px 1px 2px #FFFFFF inset",
          borderRadius: "4px 4px 0 0",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "-1rem",
            display: "inline-block",
            transform: "translate(-50%)",
            left: "50%",
            backgroundColor: "#fff",
            padding: ".3rem",
            fontSize: "1rem",
            fontWeight: "550",
            border: "1px solid #aaa",
          }}
        >
          Online Sale of Postgraduate Forms
        </span>
        <p
          style={{
            marginTop: "3rem",
            padding: "1rem",
            letterSpacing: "1px",
            wordSpacing: ".8px",
          }}
        >
          This is to inform the general public that online sale of the Bayero
          University, Kano, Postgraduate application forms for the 2021/2022
          Academic Session commences on Monday, 23 May 2022 and close on the
          Monday, 31 July 2023.
        </p>
        <p>
          All interested applicants should use the left navigation panel for
          details about available Programmes and the process of applying online.
          Please note the following information:
        </p>
        <ul style={{ listStyleType: "square" }}>
          <li>
            The cost of each application is Twelve Thousand Naira (N12,000.00)
            only.
          </li>
          <li>
            Please ensure that you have the entry requirements of the programme
            applied for, plus five ‘O’ Level Credits (including English Language
            and/or Mathematics).
          </li>
          <li>
            Applicants for Ph.D/M.Phil and Academic Master’s programmes should
            ensure that transcripts of their academic records are sent to the
            School of Postgraduate Studies.
          </li>
          <li>
            Applicants for Ph.D/M.Phil programmes should ensure that they submit
            their research proposal during application.
          </li>
        </ul>
      </div>
    </>
  );
};

export default SpsSideColumn;
