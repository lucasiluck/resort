import styled from "styled-components";

export const Container = styled.div`
  margin-top: 8.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  .whats {
    position: fixed;
    width: 3.5rem;
    height: 3.5rem;
    right: 3.25rem;
    bottom: 2rem;
    z-index: 20;
  }

  h2 {
    text-size: 2rem;
    font-weight: 700;
  }

  p {
    line-height: 2rem;
    font-weight: 400;
    font-family: "Inter", sans-serif;
    color: var(--text-gray);
  }
`;
