import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(45deg);
  }
`;

export const ContainerCard = styled.div`
  width: 200px;
  height: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: orange;
  border-radius: 5px;
`;

export const ImagePokemon = styled.img`
  width: 60%;
`;

export const PokemonNumber = styled.h2`
  margin: 0;
  align-self: start;
`;

export const PokemonName = styled.p``;
export const PokemonType = styled.p`
  background-color: black;
  padding: 2px 5px;
  border-radius: 3px;
  color: white;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Favorites = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  cursor: pointer;
`;
export const FavoritesClicked = styled.img`
  width: 30px;
  height: 30px;
  filter: invert(100%);
  animation: ${rotation} 0.4s 1 linear;
  transform: rotate(45deg);
  border-radius: 100%;
  cursor: pointer;
`;
