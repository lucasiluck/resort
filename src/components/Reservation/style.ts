import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .dog {
    position: absolute;
    left: 13.5rem;
    margin-top: -2.2rem;

  }
`;

export const Content = styled.div`
  margin-top: 6.4rem;
  display: flex;
  align-items: center;
  background-color: var(--background-blue);
  width: 68rem;
  height: 5rem;

  border-radius: 15rem;

  .vetor {
    position: absolute;
    width: 18rem;
    height: 7.7rem;
    left: 14rem;
    margin-top: -5rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-left: 23rem;
    color: black;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 16rem;
    padding: 0.8rem 2rem;
    border-radius: 13rem;
    margin-left: 4rem;
    transition: all 0.2s;

    &:hover {
      border: 1px solid black;
    }
  }
`;
