import React from "react";

const ReactPills = ({ data, pillClass }) => {
  return <span className={`badge rounded-pill  ${pillClass}`}>{data}</span>;
};

export default ReactPills;
