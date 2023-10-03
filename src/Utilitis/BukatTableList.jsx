import React from "react";
import Table from "../Utilitis/Table";

const BukatTableList = ({ tableTitle, items, headerItems }) => {
  return (
    <div>
      <h3 style={{ textAlign: "left" }}>{tableTitle}</h3>
      <Table items={items} headerItems={headerItems} key={items} />
    </div>
  );
};

export default BukatTableList;
