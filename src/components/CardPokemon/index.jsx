import { ContainerCard, ImagePokemon } from "./style";

// eslint-disable-next-line react/prop-types
export function CardPokemon({imgPokemon}){
  return (
      <ContainerCard>
        <ImagePokemon src={imgPokemon}/>
      </ContainerCard>
    )
}