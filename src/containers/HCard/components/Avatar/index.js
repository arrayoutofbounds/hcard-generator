import React from "react";
import PropTypes from "prop-types";

import { AvatarWrapper, ImageWrapper } from "./index.style";

import defaultAvatar from "../../../../assets/images/avatar.png";

export default function Avatar(props) {
  const { imageSource } = props;
  return (
    <AvatarWrapper className="avatar-wrapper">
      <ImageWrapper
        src={imageSource ? imageSource : defaultAvatar}
        alt="avatar"
      />
    </AvatarWrapper>
  );
}

Avatar.propTypes = {
  imageSource: PropTypes.string,
};
