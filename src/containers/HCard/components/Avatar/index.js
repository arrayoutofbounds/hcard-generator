import React from "react";
import PropTypes from "prop-types";

import { AvatarWrapper, ImageWrapper } from "./index.style";

export default function Avatar(props) {
  const { source } = props;
  return (
    <AvatarWrapper className="avatar-wrapper">
      <ImageWrapper src={source} alt="avatar" />
    </AvatarWrapper>
  );
}

Avatar.propTypes = {
  source: PropTypes.string,
};
