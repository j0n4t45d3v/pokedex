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
  /* background-color: orange; */
  border-radius: 5px;
  margin-top: 20px;
`;

export const ImagePokemon = styled.img`
  width: 60%;
`;

export const PokemonNumber = styled.h2`
  margin: 0;
  align-self: start;
  color: white;
  text-shadow: 2px 2px 4px black;
`;

export const PokemonName = styled.p`
  color: white;
  font-size: 20px;
  text-shadow: 2px 2px 4px black;
`;
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

export const DivFav = styled.div`
display: flex;
justify-content:  center;
align-items: center;
  z-index: 1000;
  width: 40px;
  height: 40px;
  cursor: pointer;
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
