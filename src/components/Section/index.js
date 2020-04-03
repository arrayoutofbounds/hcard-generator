import React from "react";
import { SectionWrapper, SectionTitle } from "./index.style";
import PropTypes from "prop-types";

export default function Section(props) {
  const { name, children } = props;
  return (
    <SectionWrapper>
      <SectionTitle>{name}</SectionTitle>
      {children}
    </SectionWrapper>
  );
}

Section.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
