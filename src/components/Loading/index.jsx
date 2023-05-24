import { ContainerLoading, PokeballLoading, UserLoading } from "./style";
import pokebola from "../../assets/img-loading.png"
import user from "../../assets/user-male.png"

export function Loading () {
  return (
    <ContainerLoading>
      <PokeballLoading src={pokebola}/>
      <UserLoading src={user}/>
    </ContainerLoading>
  )
}