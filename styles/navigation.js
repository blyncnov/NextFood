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

export const ListItem = styled.ul`
  display: flex;

  li {
    display: flex;
    align-items: center;
    margin-right: 1em;
    font-weight: 500;
    text-transform: capitalize;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
      Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  li:hover {
    color: #4c4c4c;
    transform: scale(1.1);
  }

  @media (max-width: 760px) {
    display: block;
    position: fixed;
    top: 0;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    background-color: whitesmoke;
    height: 100vh;
    transition: all 0.8s ease-in;
    width: 50vw;
    color: black;

    li {
      margin: 1em;
      font-weight: 500;
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
  width: 100%;

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
    color: #333333;
  }

  @media (max-width: 760px) {
    .details__box__inner {
      width: 60%;
    }

    .details__box__inner p {
      font-size: 12px;
    }
  }
`;

export default NavigationContainer;
