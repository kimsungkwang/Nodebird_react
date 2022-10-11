import React from "react";
import PropTypes, { node } from "prop-types";

const AppLayout = ({ children }) => {
  return (
      <div>
          <div>공통메뉴</div>
          {children}
      </div>
  );
};

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;