import styled from "styled-components";

export const Container = styled.header`
  height: 4rem;
`;

export const Content = styled.div`
  position: fixed;
  top: 0;
  background-color: var(--white);
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 1rem 4rem 1.2rem;
  justify-content: space-between;  
  z-index: 20;

  div {
    display: flex;
  }
`;

export const Button = styled.button`
  padding: 0.18rem 2.25rem;
  color: var(--white);
  background: var(--salmon);
  border: none;
  border-radius: 13rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.1);
  }
`;
