import styled from "styled-components";

export const FeaturedContainer = styled.div`
  color: #333;
  width: 100%;
  padding: 1em 0;
  font-weight: 500;
`;

export const FeaturedContainerColumn = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;

  .featured__text {
    text-align: center;
    font-weight: 400;
  }

  .featured__text h1 {
    margin: 0.2em 0;
    font-size: 2rem;
  }

  .featured__text h4 {
    font-weight: 500;
    color: #f2ad44;
  }

  .featured__text p {
    max-width: 60%;
    text-align: center;
    margin: 0 auto;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    .featured__text p {
      max-width: 100%;
      font-size: 14px;
    }

    .featured__text h1 {
      font-size: 1.3rem;
    }
  }
`;

export const FeaturedContainerRows = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FeaturedRows = styled.div`
  width: 100%;
  padding: 2em;

  .feature__container {
    display: flex;
    gap: 1em;
    align-items: center;
  }

  .placement h4 {
    font-size: 20px;
    margin: 0.5em 0;
    text-align: start;
    color: black;
    font-weight: 400;
    font-family: Jost, Arial, Helvetica, sans-serif;
  }

  .placement p {
    color: grey;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    .placement {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .placement p {
      color: grey;
      font-weight: 400;
      font-size: 14px;
    }
  }
`;

export default FeaturedContainer;