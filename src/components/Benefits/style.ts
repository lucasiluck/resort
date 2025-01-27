import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 9.3rem;
  h1 {
    font-size: 1.5rem;
    line-height: 2rem;
  
    color: black;
    margin-bottom: 5rem;
    
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8rem;

  li {
    display: flex;
    flex-direction: column;
    text-align: left;

    img {
      width: 3.5rem;
      height: 3.5rem;
    }

    .benefits {
      position: absolute;
      transform: translateY(-0.8rem) translateX(1rem);
    }

    h2 {
      font-size: 1.3rem;
      line-height: 1.8rem;
      margin-top: 1.5rem;
    }

    p {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 0.8rem;
      line-height: 1.1rem;
      margin-top: 1rem;
      color: var(--text-gray);
    }
  }
`;
