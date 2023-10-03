import React from "react";
import "./Css/main.css";

const Main = () => {
  return (
    <div className="container">
      <div id="header">
        <h1>
          “AND ABOVE EVERY POSSESSOR OF KNOWLEDGE, THERE IS THE ONE MORE
          LEARNED.”
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="text">
            <p>
              Bayero University has evolved from a small college running
              Advanced Level training programmes to one of the respected
              Nigerian Universities, recognized beyond the shores of the
              country. The seed of Bayero University Kano was the Ahmadu Bello
              College set up in 1960, located within the School for Arabic
              Studies (SAS), in the old city of Kano. With the establishment of
              Ahmadu Bello University, Zaria, in 1962, it was renamed Abdullahi
              Bayero College. In 1964 it moved to a temporary site at the old
              Kano Airport Hotel, admitting its first set of ten undergraduate
              students for a B.A. degree programme of Ahmadu Bello University.
            </p>
          </div>
          <button className="btn btn-primary">READ MORE</button>
        </div>
        <div className="col-lg-6">
          <div className="img">
            <img src="https://buk.edu.ng/sites/default/files/inline-images/edwe.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
