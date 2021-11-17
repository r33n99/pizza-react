import React from "react";
import PropTypes from "prop-types";

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onSelectCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory == null ? "active" : ""}
          onClick={() => onSelectCategory(null)}
        >
          Все
        </li>
        {items.map((el, index) => (
          <li
            className={activeCategory === index ? "active" : ""}
            onClick={() => onSelectCategory(index)}
            key={`${el}_${index}`}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectCategory: PropTypes.func,
};
Categories.defaultProps = {
  activeCategory: null,
  items: [],
};
export default Categories;
