import React from "react";

const TableHeader = ({ items }) => {
  return (
    <thead>
      <tr>
        {items.map((item, index) => (
          <th key={index} scope="col">
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
