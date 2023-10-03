import React from "react";
import { Link, useLocation } from "react-router-dom";

const ScePgSidebar = ({
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  list7,
  list8,
}) => {
  const style = {
    textDecoration: "none",
    color: "inherit",
    textAlign: "center",
  };
  const { pathname } = useLocation();
  const isOnSce =
    pathname === "/sceform" ||
    pathname === "/sceforms/availableprogrammes" ||
    pathname === "/sceforms/applicationprocedure" ||
    pathname === "/sceforms/admissionrequirements" ||
    pathname === "/sceforms/paymentprocedure" ||
    pathname === "/sceforms/create_account" ||
    pathname === "/sceforms/login" ||
    pathname === "/sceforms/recover_password";
  return (
    <div className="col-3">
      <ul className="list-group list-dbs">
        <li className="list-group-item">
          {
            <Link
              to={isOnSce ? "/sceforms/availableprogrammes" : "/spsform2021"}
              style={style}
            >
              {list1}
            </Link>
          }
        </li>
        <li className="list-group-item">
          {
            <Link
              to={
                isOnSce
                  ? "/sceforms/applicationprocedure"
                  : "/spsform2021/availableprogrammes"
              }
              style={style}
            >
              {list2}
            </Link>
          }
        </li>
        <li className="list-group-item">
          {
            <Link
              to={
                isOnSce
                  ? "/sceforms/admissionrequirements"
                  : "/spsformsadmissionrequirements"
              }
              style={style}
            >
              {list3}
            </Link>
          }
        </li>
        <li className="list-group-item">
          {
            <Link
              to={
                isOnSce
                  ? "/sceforms/paymentprocedure"
                  : "/spsforms/applicationprocedure"
              }
              style={style}
            >
              {list4}
            </Link>
          }
        </li>
        <li className="list-group-item">
          {
            <Link
              to={
                isOnSce
                  ? "/sceforms/create_account"
                  : "/spsforms/paymentprocedure"
              }
              style={style}
            >
              {list5}
            </Link>
          }
        </li>
        <li className="list-group-item">
          {
            <Link
              to={isOnSce ? "/sceforms/login" : "/spsforms/create_account"}
              style={style}
            >
              {list6}
            </Link>
          }
        </li>
        <li className="list-group-item">
          {
            <Link
              to={isOnSce ? "/sceforms/recover_password" : "/spsforms/login"}
              style={style}
            >
              {list7}
            </Link>
          }
        </li>
        <li className="list-group-item">
          {
            <Link to="/spsforms/recover_password" style={style}>
              {list8}
            </Link>
          }
        </li>
      </ul>
    </div>
  );
};

export default ScePgSidebar;
