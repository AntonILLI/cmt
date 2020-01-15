//EventTable - Custom Image with styling

import React from "react";
import styled from "styled-components";
import { setColor } from "../../globals/colors";
const Image = styled.img`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 10px;
`;

const NoImage = styled.div`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 10px;
  background-color: ${setColor.textColor};
  line-height: ${props => `${props.size}px`};
  text-align: center;
  color: #ffffff;
`;
const EventImg = ({ size = 100, title, img, ...others }) =>
  //an initial letter of title
  img === "" ? (
    <NoImage {...others} size={size}>
      {title.substr(0, 1).toUpperCase()}
    </NoImage>
  ) : (
    <Image {...others} size={size} src={img} alt={title} />
  );

export default EventImg;
