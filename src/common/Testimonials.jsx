import React from "react";
import { FaPlus } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="container-fluid testimonials">
      <div className="row">
        <div className="col-lg-6">
          <div className="testimonials-links">
            <a href="#" className="testimonials-link">
              <span>
                <FaPlus />
              </span>
            </a>
            SEE ALL TESTIMONIALS
          </div>
        </div>

        <div className="testimonial col-lg-6">
          <p>
            "Here at Bayero University, we are committed to addressing African
            developmental challenges through cutting-edge research, knowledge
            transfer and training of high quality graduates."
          </p>
          <small>PROF. SAGIR ADAMU ABBAS</small> <br />
          <small>Vice Chancellor</small>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
