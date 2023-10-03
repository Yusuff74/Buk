import React, { Component } from "react";
import Slide from "./HorizontalSlides";
import CardImage from "./CardImage";

const slide_img = [
  {
    src: "https://buk.edu.ng/sites/default/files/styles/large/public/2023-07/news1.jpeg?itok=quEd_rYI",
    cardBody: "COMMENCEMENT OF BUK SHUTTLE FOR STAFF",
    referee: "by admin",
    date: "July 25, 2023",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/large/public/2023-08/HADIZA%20GALADANCI.jpeg?itok=FGRuZtii",
    cardBody: "Prof. Hadiza Galadanci Gets Heroine of Health 2023 Award",
    referee: "by admin",
    date: "July 31, 2023",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/large/public/2023-08/news.jpeg?itok=ejdSwbFs",
    cardBody: "2021/2022 FIRST BATCH PG ADMISSIONS LIST",
    referee: "by admin",
    date: "August 02, 2023",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/large/public/2023-08/announcement2.jpg?itok=nTpRbU1b",
    cardBody:
      "EXTENSION OF UNDERGRADUATE REGISTRATION FOR THE 2021/2022 SESSION",
    referee: "by admin",
    date: "August 10, 2023",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/large/public/2023-08/newsbg2_0.png?itok=-u94JKN8",
    cardBody:
      "Registration Fee Hike: Hundreds of BUK Students Get Indigent Scholarship",
    referee: "by admin",
    date: "August 13, 2023",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/large/public/2023-08/IMG-20230814-WA0285.jpg?itok=sVfOFiuB",
    cardBody: "BUK Graduates 52 Newly Qualified Medical Doctors, Dentists",
    referee: "by publication",
    date: "August 16, 2023",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/large/public/2023-08/WhatsApp%20Image%202023-08-18%20at%2011.23.36%20AM%20copy.jpeg?itok=GXFdFxXA",
    cardBody: "INVITATION TO SSANU Women Inaugral Meeting",
    referee: "by admin",
    date: "August 18, 2023",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/large/public/2023-08/newsbg_1_0.png?itok=iFi_tLCL",
    cardBody: "E-Learning Training Schedule",
    referee: "by admin",
    date: "August 18, 2023",
  },
  {
    src: "https://buk.edu.ng/sites/default/files/styles/large/public/2023-08/news_0.jpeg?itok=SzAjWJDM",
    cardBody: "HOW TO ACCESS THE GSP/EEP ONLINE TEACHING PLATFORM",
    referee: "by admin",
    date: "August 18, 2023",
  },
];

const Events = () => {
  const children = slide_img.map((img, i) => (
    <CardImage
      key={i}
      src={img.src}
      cardBody={img.cardBody}
      referee={img.referee}
      date={img.date}
    />
  ));

  return (
    <>
      {" "}
      <div id="header">
        <h1>NEWS & EVENTS</h1>
      </div>
      <Slide slidesPerView={3} children={children} spaceBetween={20} />
      <div className="button">
        <button className="btn btn-primary btn-bg">More News</button>
      </div>
    </>
  );
};

export default Events;
