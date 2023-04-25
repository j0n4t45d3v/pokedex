import {
  ContainerCard,
  Favorites,
  Header,
  ImagePokemon,
  PokemonName,
  PokemonNumber,
  PokemonType,
} from "./style";
import poke from "../../assets/pokebola.png";

export function CardPokemon({
  imgPokemon,
  pokemonNumber,
  pokemonName,
  pokemonTypes,
}) {
  return (
    <ContainerCard>
      <Header>
        <PokemonNumber>#{pokemonNumber}</PokemonNumber>
        <Favorites src={poke}  />
      </Header>
      <ImagePokemon src={imgPokemon} />
      <PokemonName>{pokemonName}</PokemonName>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        {pokemonTypes.map((e, index) => {
          return <PokemonType key={index}>{e}</PokemonType>;
        })}
      </div>
    </ContainerCard>
  );
}
