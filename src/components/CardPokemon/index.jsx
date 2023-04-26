import { useState } from 'react';
import poke from '../../assets/pokebola.png';
import {
  ContainerCard,
  Favorites,
  FavoritesClicked,
  Header,
  ImagePokemon,
  PokemonName,
  PokemonNumber,
  PokemonType,
} from './style';

export function CardPokemon({
  imgPokemon,
  pokemonNumber,
  pokemonName,
  pokemonTypes,
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <ContainerCard>
      <Header>
        <PokemonNumber>#{pokemonNumber}</PokemonNumber>
        {clicked? <FavoritesClicked  src={poke} onClick={()=> setClicked(false)}/>: <Favorites src={poke} onClick={()=> setClicked(true)} />}
      </Header>
      <ImagePokemon src={imgPokemon} />
      <PokemonName>{pokemonName}</PokemonName>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        {pokemonTypes.map((e, index) => {
          return <PokemonType key={index}>{e}</PokemonType>;
        })}
      </div>
    </ContainerCard>
  );
}
