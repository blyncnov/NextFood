import styled from "styled-components";

export const ServicesContainer = styled.div`
  width: 100%;
`;

export const ServicesColumn = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  gap: 1em;
  padding: 0.5em;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px; */
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */

  @media (max-width: 768px) {
    flex-direction: ${({ reverse }) => (reverse ? "column" : "column")};
    padding: 1em 0.3em;
  }
`;

export const ServicesRows = styled.div`
  width: 100%;
  flex-basis: ${({ wide }) => (wide ? "60%" : "40%")};
  background-color: ${({ wide }) => (wide ? "transparent" : "transparent")};
  padding: 0.2em 0.5em;
  border-radius: 4px;
  /* align-items: center;
  justify-content: space-between; */

  h4 {
    font-size: 2rem;
    color: #253276;
  }

  .service__path {
    border-radius: 4px;
    padding: 0.5em;
    background-color: #eee;
    color: #151A3E;
  }

    .service__path h2 {
    font-size: 1.2rem;
  }

  .service__path p {
    font-weight: 600;
 
  }

  p {
    color: #151a3e;
    font-size: 16px;
    font-weight: 400;
  }

  button {
    color: white;
    border: 1px solid transparent;
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
      0px 2px 4px rgba(96, 97, 112, 0.16);
    font-weight: 700;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s ease-in-out, color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    background-color: #090b24;
  }

  button:hover {
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.03), 0px 2px 4px #090b24;
    color: #090b24;
    background-color: transparent;
    border: 2px solid white;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }

  p {
    color: #151a3e;
    font-size: 12px;
    font-weight: 400;
  }

  h4 {
    font-size: 1.8rem;
  }
`;

export default ServicesContainer;
