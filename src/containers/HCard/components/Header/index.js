import React from "react";
import { HeaderWrapper } from "./index.style";
import PropTypes from "prop-types";

export default function Header(props) {
  const { children } = props;
  return <HeaderWrapper className="hcard-header">{children}</HeaderWrapper>;
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
