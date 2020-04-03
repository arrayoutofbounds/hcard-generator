import React from "react";
import PropTypes from "prop-types";

import { RowWrapper, RowLabel, RowBody } from "./index.style";

export default function Row(props) {
  const { children, label } = props;
  const hide = label ? false : true;
  return (
    <RowWrapper>
      <RowLabel hide={hide}>{label}</RowLabel>

      <RowBody>{children}</RowBody>
    </RowWrapper>
  );
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
};
