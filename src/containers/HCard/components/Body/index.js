import React from "react";
import { BodyWrapper } from "./index.style";
import PropTypes from "prop-types";

export default function Body(props) {
  const { children } = props;
  return <BodyWrapper className="hcard-body">{children}</BodyWrapper>;
}

Body.propTypes = {
  children: PropTypes.node.isRequired,
};
