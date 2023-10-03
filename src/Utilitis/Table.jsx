import React from "react";
import TableList from "./TableList";
import TableHeader from "./TableHeader";

const Table = ({ items, headerItems }) => {
  return (
    <table
      className="table table-striped table-bordered"
      style={{ textAlign: "left" }}
    >
      <TableHeader items={headerItems} />
      <tbody>
        {items.map((item, index) => (
          <TableList
            key={index}
            rowNum={item.num}
            td1={item.td1}
            td2={item.td2}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
