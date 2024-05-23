import React from "react";

const ReactDropDown = ({
  reacordPerPage,
  setBooksPerPage,
  booksPerPage,
  dropDownClass,
}) => {
  return (
    <select
      value={booksPerPage}
      onChange={(e) => setBooksPerPage(e.target.value)}
      className={`form-select ${dropDownClass}`}
      aria-label="Default select example"
    >
      {reacordPerPage.map((ele) => {
        return (
          <option className="optionsList" key={ele} value={ele}>
            {ele}
          </option>
        );
      })}
    </select>
  );
};

export default ReactDropDown;
