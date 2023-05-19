import React from "react";

const Categories = ({ categories, filter }) => {
  return (
    <div className="btn-container">
      {categories.map((cate) => (
        <button
          type="button"
          className="btn"
          key={cate}
          onClick={() => filter(cate)}
        >
          {cate}
        </button>
      ))}
    </div>
  );
};

export default Categories;
