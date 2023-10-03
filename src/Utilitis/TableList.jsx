import React from "react";

const TableList = ({ rowNum, td1, td2, td3, td4, td5, td6 }) => {
  return (
    <tr>
      <th scope="row">{rowNum}</th>
      <td>{td1}</td>
      <td>{td2}</td>
      <td>{td3}</td>
      <td>{td4}</td>
      <td>{td5}</td>
      <td>{td6}</td>
    </tr>
  );
};

export default TableList;
