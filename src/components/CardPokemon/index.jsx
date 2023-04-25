import {
  ContainerCard,
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
  return (
    <ContainerCard>
      <PokemonNumber>#{pokemonNumber}</PokemonNumber>
      <ImagePokemon src={imgPokemon} />
      <PokemonName>{pokemonName}</PokemonName>
      <div style={{ display: 'flex', flexDirection: 'row' , gap: 10}}>
        {pokemonTypes.map((e, index) => {
          return <PokemonType key={index}>{e}</PokemonType>;
        })}
      </div>
    </ContainerCard>
  );
}
