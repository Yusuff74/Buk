import React from "react";
import Footer from "../common/Footer";
import MainHeader from "./MainHeader";

const DressCode = () => {
  return (
    <>
      <MainHeader title="Bayero University, Kano Dress Code e-Brochure" />
      <div style={{ backgroundColor: "#fff", padding: "10rem 5rem" }}>
        <h2>BAYERO UNIVERSITY, KANO DRESS CODE E-BROCHURE</h2>
        <p>
          In line with the university's role of training students in both
          character and learning, all students should dress decently in
          accordance/compliance with the Bayero University, Kano dress code.
          Accordingly, acceptable and decent dress is any type of dress worn by
          a students, that covers, the body from top of the shoulders to midway
          between the knee and the ankle, and it must not be tight fitting or
          transparent.
        </p>
        <p>Specifically, the dress code forbids indecent dressing such as:</p>
        <div>
          <ol>
            <li>Short, bare back and clinging dress</li>
            <li>
              Shorts and three quarter trousers (except for sporting purpose)
            </li>
            <li>Tattered jeans and those with holes</li>
            <li>Transparent dresses</li>
            <li>
              Tight fitting dresses e.g. jeans and skirts that reveal body
              curves; this is also applicable to locally sewn dresses such as
              skirts and blouses
            </li>
            <li>
              Wearing only under clothing such as singlet in public places
            </li>
            <li>Wearing “Swagger” and/or Sagging trousers</li>
            <li>
              Dresses, such as skirts, which have long slits that reveal
              sensitive body parts
            </li>
            <li>
              Dresses and vests with obscene and indecent inscritions and/or
              pictures
            </li>
            <li>
              Dress without buttons, or not properly buttoned, revealing bare
              chest
            </li>
            <li>
              Wearing jackboots, bathroom slippers and any other shoes with
              indecent inscription
            </li>
            <li>
              Sunglasses in lecture rooms and theaters except on medical grounds
            </li>
            <li>
              Plaiting/weaving, perming of hair and use of earrings and chain
              and bracelets by male students
            </li>
            <li>
              Use of military and para-military camouflage by students on campus
            </li>
            <li>
              Any other dressing that contravenes, decency, decorum and good
              taste of the community
            </li>
          </ol>
        </div>
        <p style={{ fontWeight: "550" }}>NOTE:</p>
        <p>
          Students should note that, these prohibitions apply everywhere on the
          campuses. In addition, students are bound by the specific dress code
          of their Faculties, Departments or Professional callings.
          <span style={{ fontWeight: "550" }}>
            Offenders will be sanctioned as appropriate
          </span>
        </p>
        <p style={{ fontWeight: "550" }}>SAMPLE DRESS CODE</p>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              src="https://buk.edu.ng/sites/default/files/inline-images/BUKDRESSCODE3.png"
              style={{ width: "30rem", height: "20rem" }}
            />
            <img
              src="https://buk.edu.ng/sites/default/files/inline-images/BUKDRESSCODE1_0.png"
              style={{ width: "30rem", height: "20rem" }}
            />
            <img
              src="https://buk.edu.ng/sites/default/files/inline-images/BUKDRESSCODE2_0.png"
              style={{ width: "30rem", height: "20rem" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DressCode;
