import React from "react";
import PropTypes from "prop-types";

const Header = ({ classname, columnName }) => (
  <div className={`${classname}__header`}>
    <h2>
        {columnName}
    </h2>
  </div>
);

Header.propTypes = {
  classname: PropTypes.string,
  columnName: PropTypes.string
};

export default Header;
