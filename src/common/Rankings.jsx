import React from "react";

const Rankings = () => {
  return (
    <div className="container">
      <div id="header">
        <h1>OUR RANKINGS</h1>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <img
            src="https://buk.edu.ng/sites/default/files/inline-images/fb_header1.png"
            style={{ width: "25rem", height: "10rem" }}
          />
        </div>
        <div className="col-lg-4">
          <img
            src="https://buk.edu.ng/sites/default/files/inline-images/fb_header1.png"
            style={{ width: "25rem", height: "10rem" }}
          />
        </div>
        <div className="col-lg-4">
          <img
            src="https://buk.edu.ng/sites/default/files/inline-images/fb_header_2.png"
            style={{ width: "25rem", height: "10rem" }}
          />
        </div>
      </div>
      <div className="button d-block">
        <button className="btn btn-primary">VIEW MORE</button>
      </div>
    </div>
  );
};

export default Rankings;
