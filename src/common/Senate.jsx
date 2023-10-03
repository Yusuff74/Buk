import React from "react";
import Slide from "./HorizontalSlides";

const senateInfo = [
  {
    src: "https://buk.edu.ng/sites/default/files/styles/mt_brands/public/2020-11/prof_edited_1.jpg?itok=VK7zleun",
    body: "PROF. Sagir Adamu Abbas",
    title: "Vice Chancellor",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/mt_brands/public/2023-05/Registrar1.jpeg?itok=vJcFV3Gf",
    body: "Amina Umar Abdullahi",
    title: "Acting Registrar",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/mt_brands/public/2021-09/Dvc%20Acad.jpg?itok=8tjk0jgQ",
    body: "PROF. Muhammd Sani Gumel",
    title: "DVC (Academics)",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/mt_brands/public/2021-09/DVc%20Management%20services.jpg?itok=Free06Fw",
    body: "PROF. Muhammad Umar Sani",
    title: "DVC (Management Services)",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/mt_brands/public/2021-09/DVc%20Research%20%26%20dev.JPG?itok=AY-65HaO",
    body: "PROF. Abdullahi Sule Kano",
    title: "DVC (Research & Development)",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/mt_brands/public/2023-05/Librarian%20copy.JPG?itok=MbwZ91yJ",
    body: "Dr. Kabiru Dahiru Abbas",
    title: "Librarian",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/mt_brands/public/2023-05/Bursar%20copy.JPG?itok=2QyvtMY7",
    body: "Rabiu Umar Dauda",
    title: "Bursar",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/mt_brands/public/2020-11/prof_edited_1.jpg?itok=VK7zleun",
    body: "PROF. Sagir Adamu Abbas",
    title: "Vice Chancellor",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/mt_brands/public/2023-05/Registrar1.jpeg?itok=vJcFV3Gf",
    body: "Amina Umar Abdullahi",
    title: "Acting Registrar",
  },
];
const Senate = () => {
  const num = 12;

  const createDivs = () => {
    const divs = [];

    for (let i = 0; i < num; i++) {
      divs.push(<div key={i}></div>);
    }

    return divs;
  };

  const divElements = createDivs();

  const children = senateInfo.map((s, i) => (
    <div key={i}>
      <img
        src={s.src}
        className="card-img-top"
        alt="..."
        style={{ width: "12rem", height: "12rem" }}
      />
      <div className="card-body" style={{ width: "12rem" }}>
        <p
          className="card-text text-center w-100"
          style={{ fontSize: "1.3rem" }}
        >
          {s.body}
        </p>
        <p
          className="text-center w-100"
          style={{ fontSize: "1.2rem", fontWeight: "550" }}
        >
          {s.title}
        </p>
      </div>
    </div>
  ));

  return (
    <div
      className="card"
      style={{ backgroundColor: "transparent", padding: "7rem 0" }}
    >
      <div className="header text-center" style={{ letterSpacing: "3px" }}>
        <h1>PRINCIPAL OFFICERS</h1>
      </div>
      <Slide slidesPerView={4.5} children={children} spaceBetween={0} />
    </div>
  );
};

export default Senate;
