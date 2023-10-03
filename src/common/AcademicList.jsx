import React from "react";

const Academic = () => {
  const academicLists = [
    {
      src: "https://buk.edu.ng/sites/default/files/styles/mt_product_image/public/2020-10/DSC_1976_0.JPG?itok=MY2-Imhx",
      link: "UNDERGRADUATE STUDIES",
      body: "Be part of the lucky ones to have a great opportunity to study in one of the leading universities in Nigeria.",
    },
    {
      src: "https://buk.edu.ng/sites/default/files/styles/mt_product_image/public/2020-10/IMG_2304_0.JPG?itok=a0LSqQpf",
      link: "POSTGRADUATE STUDIES",
      body: "A wide range of graduate programs leading to Master’s and Doctor of Philosophy degrees are offered.",
    },
    {
      src: "https://buk.edu.ng/sites/default/files/styles/mt_product_image/public/2020-10/39-Continuing-Medical-Education-in-Ghana-Africa-scaled_0.jpg?itok=ZGRVwu8Z",
      link: "CONTINUING EDUCATION",
      body: "Earn a degree of your choice at ease while maintaining your work life.",
    },
  ];
  return (
    <div className="container-fluid academic">
      <div id="header">
        <h1>ACADEMICS</h1>
        <p
          className="text-center"
          style={{ letterSpacing: "2px", fontWeight: "400" }}
        >
          Preparing students to make meaningful contributions to society as
          engaged citizens and leaders in a complex world
        </p>
      </div>
      <div className="row w-100">
        {academicLists.map((a, i) => (
          <div className="col-lg-4" key={i}>
            <div
              className="card w-100"
              style={{
                backgroundColor: "#eee",
                boxShadow: "0 15px 20px 0 rgba(0,0,0,0.5)",
              }}
            >
              <img src={a.src} className="card-img-top" />
              <div className="card-body my-3">
                <a
                  className="card-title text-center"
                  style={{
                    display: "block",
                    color: "#02669d",
                    letterSpacing: "1px",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: "400",
                    cursor: "pointer",
                  }}
                >
                  {a.link}
                </a>
                <p
                  className="card-text text-center"
                  style={{
                    lineHeight: "1.7",
                    fontSize: "2rem",
                    fontWeight: "400",
                  }}
                >
                  {a.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academic;
