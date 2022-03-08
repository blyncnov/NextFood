import styled from "styled-components";

export const NavigationContainer = styled.div`
  width: 100%;
  background-color: transparent;
  padding: 1.5em 1em;
  position: relative;
  /* background-color: rgb(19 27 77/0.8); */
`;

export const NavigationColumn = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  color: white;

  .logo__section__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .second {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5em;
  }

  .logo {
    display: block;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  .logo:hover {
    transform: scale(1.01);
  }

  .mobile {
    cursor: pointer;
    z-index: 99999;
  }

  .mobile__opening {
    display: none;
    z-index: 9999;
  }

  @media (max-width: 1000px) {
    max-width: 95%;
  }

  @media (max-width: 1000px) {
    .mobile {
      display: none;
    }
  }

  @media (max-width: 760px) {
    .mobile__opening {
      display: block;
    }
  }
`;

export const ListItem = styled.div`
  @media (max-width: 760px) {
    position: fixed;
    top: 0;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    background-color: transparent;
    transition: all 0.8s ease-in;
    width: 100%;
  }
`;

export const ListItems = styled.ul`
  display: flex;
  gap: 1em;

  li {
    font-weight: 500;
    cursor: pointer;
  }

  @media (max-width: 760px) {
    display: block;
    width: 50%;
    background-color: whitesmoke;
    height: 100%;
    color: #090b24;

    li {
      padding: 1em;
    }
  }
`;

export const DetailsCardBox = styled.div`
  position: fixed;
  top: 0;
  left: ${({ click }) => (click ? "0" : "-100%")};
  width: 100%;
  background-color: rgba(0, 0, 0, 0.01);
  transition: all 0.8s ease-in;

  .details__box__inner {
    width: 25vw;
    background-color: white;
    height: 100vh;
    color: black;
    color: white;
    padding: 1em;
  }

  .details__box__inner h1,
  .details__box__inner p {
    text-align: start;
    color: #090b24;
  }

  ul {
    color: #333;
  }

  ul li {
    margin: 1em 0;
    font-weight: 700;
  }

  @media (max-width: 760px) {
    ul li {
      font-size: 12px;
    }

    .details__box__inner {
      width: 60%;
    }

    .details__box__inner p {
      font-size: 12px;
    }
  }
`;

export default NavigationContainer;
