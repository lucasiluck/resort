import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 7.8rem;
  margin-top: 12.9rem;
`;

export const Content = styled.div`
position: relative;
width: 100%;
height: 35rem;

  .slide {
    position: absolute;
    width: 100%;
    height: 35rem;

    object-fit: cover;
    opacity: 0;
    transition: opacity 1s ease-in, transform 1s ease-out;
  }

  .slide.active {
    opacity: 1;
  }

  .slide.not(.active) {
    opacity:0;
  }

  .arrow{
    position: absolute;
    left:0;
    right:0;
    bottom: 10rem;
    display: flex;
    justify-content: space-between;
    padding: 5rem;
    z-index: 10;

  button{ 
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
    width: 3rem;
    height: 3rem;
    padding: 2rem;
    border: 1px solid black;
    border-radius: 10rem;
    transition: all 0.2s;

    &:hover{
      transform: scale(1.05);
    }
  }
}

`;

export const Navigation = styled.button<{ activate: boolean , index : number}>`
  position: absolute;
  bottom: 2rem;
  transform: translateY(-50%);
  left: calc(50% + ${props => props.index * 1.8}rem);
  transform: translateX(-50%);
  width: 1rem;
  height: 1rem;
  border-radius: 20rem;
  border: 2px solid var(--white);
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: ${(props) => (props.activate ? "white" : "transparent")};
  z-index: 10;
`;
