import styled from "styled-components";

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
  background-color: red;
  border-radius: 100%;
  transform: rotate(45deg);
`;
