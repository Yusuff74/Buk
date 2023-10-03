import React from "react";

const Summary = () => {
  return (
    <div
      className="container-fluid"
      style={{ marginTop: "5rem", backgroundColor: "#fff", padding: "10rem 0" }}
    >
      <div className="row">
        <div className="col-lg-6" style={{ paddingLeft: "4rem" }}>
          <div className="header">
            <h1 style={{ letterSpacing: "1px", marginBottom: "3rem" }}>
              WANT TO STUDY WITH US ?
            </h1>
          </div>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>
            Students applying to Bayero University are categorized into several
            groups based on type/level of degree been sort after. There two
            broad levels namely Undergraduate and Postgraduate applicants.{" "}
            <br /> <br /> The general entry requirements for the Part-time
            degree programmes are OND (with merit), NCE, IJMB (with a minimum of
            8 points), GCE ‘A’ Level (3 credits) and HND (Pass). Applicants must
            also possess all the necessary ‘O’ Level requirements applicable to
            the regular full time undergraduate admissions. This means that
            credit in English is compulsory for all courses applied, while
            Mathematics is necessary for science based courses and the social
            sciences.
          </p>
          <a href="#" className="btn btn-primary">
            APPLY
          </a>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div
              className="col"
              style={{ display: "flex", justifyContent: "start" }}
            >
              <img
                src="https://buk.edu.ng/sites/default/files/inline-images/admission.jpg"
                style={{
                  width: "25rem",
                  height: "15rem",
                }}
              />
            </div>
            <div
              className="col"
              style={{
                display: "flex",
                justifyContent: "end",
                marginRight: "6.5rem",
                marginTop: "-6rem",
              }}
            >
              <img
                src="https://buk.edu.ng/sites/default/files/inline-images/admission2.jpg"
                style={{
                  width: "25rem",
                  height: "15rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
