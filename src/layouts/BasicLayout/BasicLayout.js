import React from "react";
import PropTypes from "prop-types";

function BasicLayout({ children }) {
  return (
    <div>
      <h2>MENU</h2>
      {children}
    </div>
  );
}

BasicLayout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default BasicLayout;
