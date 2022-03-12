import styled from "styled-components";
import Banner from "../public/assets/images/fancy-circle.svg";

export const HeaderContainer = styled.div`
  background-color: #090b24;
  color: white;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    #3e7dff 0%,
    rgba(62, 125, 255, 0) 100%
  );
  /* url({Banner});
  background-image: url(${Banner}), url(${Banner});
  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat; */
`;

export default HeaderContainer;
