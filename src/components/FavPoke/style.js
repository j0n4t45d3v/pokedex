import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(45deg);
  }
`;

export const Favorites = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
`;
export const FavoritesClicked = styled.img`
  width: 30px;
  height: 30px;
  filter: invert(100%);
  animation: ${rotation} 0.4s 1 linear;
  transform: rotate(45deg);
  border-radius: 100%;

`;

export const DivFav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;