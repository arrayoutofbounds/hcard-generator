import React from "react";
import PropTypes from "prop-types";
import { LinkWrapper } from "./index.style";

export default function EmailLink(props) {
  const { email } = props;
  return (
    <LinkWrapper className="email" href={`mailto: ${email}`}>
      {email}
    </LinkWrapper>
  );
}

EmailLink.propTypes = {
  email: PropTypes.string.isRequired,
};
