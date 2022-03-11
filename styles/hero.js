import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: transparent;
  color: white;
  width: 100%;
  font-family: Inter, sans-serif;
`;

export const HeroContainerColumn = styled.div`
  background-color: transparent;
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  gap: 2em;
  padding: 2em 0 3em;
  align-items: center;
  justify-content: space-between;

  img {
    border-radius: 5px;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const HeroContainerRow = styled.div`
  background-color: transparent;
  width: 100%;

  h1 {
    font-size: 2.5rem;
    line-height: 55px;
    font-weight: 700;
  }

  p {
    color: white;
    opacity: 0.7;
    font-weight: 400;
  }

  button {
    background-color: #131533;
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
  }

  button:hover {
    box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.03),
      0px 2px 4px rgba(96, 97, 112, 0.14);
    color: white;
    background-color: transparent;
    border: 2px solid white;
  }

  .btn__display,
  .text__display {
    display: flex;
    align-items: center;
    gap: 2em;
  }

  .text__display {
    justify-content: center;
    gap: 0.4em;
  }

  @media (max-width: 760px) {
    h1 {
      font-size: 1.8rem;
      line-height: 40px;
    }
  }
`;

export default HeroContainer;
