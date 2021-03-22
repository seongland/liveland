import React from "react";
import PropTypes from "prop-types";
import {
  DetailHeadingBox,
  VideoDetailsContainer,
  DetailsTitle,
  DetailsHeading,
  DetailsTop,
  ViewerTag,
} from "../styles/videoDetailsStyles";

const VideoDetails = ({ viewers }) => {
  return (
    <VideoDetailsContainer>
      <DetailsTop>
        <ViewerTag>
          <i className="fas fa-user-friends"></i>
          <span>{viewers}</span>
        </ViewerTag>
      </DetailsTop>
      <DetailHeadingBox>
        <DetailsTitle>
          <DetailsHeading>Welcome to Seongland Live</DetailsHeading>
        </DetailsTitle>
      </DetailHeadingBox>
    </VideoDetailsContainer>
  );
};

export default VideoDetails;

VideoDetails.propTypes = {
  viewers: PropTypes.number,
};
