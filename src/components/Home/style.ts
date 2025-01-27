import styled from "styled-components";
import Dog from "../../assets/dog.jpeg";

export const Container = styled.section`
  background-image: url(${Dog});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 42.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button:first-child {
    color: var(--white);
    padding: 0.6rem 3.12rem;
    border: none;
    border-radius: 5rem;

    margin-top: 2.25rem;
    margin-bottom: 12rem;
    background-color: black;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.02);
    }
  }

  button:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: none;

    padding: 1.3rem;
    width: 25rem;

    background-color: var(--white);
    border-radius: 5rem;
    margin-bottom: 6.75rem;

    transition: border 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    border : 0.1px solid black;
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.01);
  }
}
  }

  div h1 {
    display: flex;
    justify-content: center;

    font-size: 3.12rem;
    line-height: 3.2rem;
    color: var(--white);
  }
`;
