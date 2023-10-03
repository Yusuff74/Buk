import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        className="nav nav-pills flex-column flex-sm-row navbar w-100"
        data-bs-theme="dark"
        style={{ overflowX: "hidden" }}
      >
        <Link
          className="flex-sm-fill text-sm-center nav-link"
          aria-current="page"
          to="/students"
        >
          Student
        </Link>
        <Link className="flex-sm-fill text-sm-center nav-link" href="#">
          staff
        </Link>
        <Link className="flex-sm-fill text-sm-center nav-link" href="#">
          Alumni
        </Link>
        <Link className="flex-sm-fill text-sm-center nav-link" href="#">
          Resources
        </Link>
        <Link className="flex-sm-fill text-sm-center nav-link" href="#">
          Health and safety
        </Link>
        <Link className="flex-sm-fill text-sm-center nav-link" href="#">
          Research
        </Link>
        <Link className="flex-sm-fill text-sm-center nav-link" href="#">
          Ranking
        </Link>
        <Link className="flex-sm-fill text-sm-center nav-link" href="#">
          tetfund
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
