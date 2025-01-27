import styled from "styled-components";

export const Container = styled.div`
  margin-right: 12rem;
  margin-left: 10.5rem;
  margin-top: 5rem; 
  display: flex;
  align-items: center;
  justify-content: space-between;

  .dog{
    position: absolute;
    right: 8rem;
    margin-top: -5rem;  
  }

  div {
  width: 30rem;
  margin-top: -10rem;

    h3 {
      font-family: "Inter", sans-serif;
      font-weight: 400;
      color: var(--text-gray);
      letter-spacing: 0.2rem;
      margin-bottom: 1rem;
    }

    h2 {
      font-weight: 700;
      font-size: 2rem;
      line-height: 2rem;
      margin-bottom: 6rem;
    }

    p {
      font-family: "Inter", sans-serif;
      font-weight: 400;
      color: var(--text-gray);
    }
  }
`;
