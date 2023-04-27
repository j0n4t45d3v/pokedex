import { ContainerLoading, IconLoading } from "./style";
import icon from "../../assets/img-loading.png"

export function Loading () {
  return (
    <ContainerLoading>
      <IconLoading src={icon}/>
    </ContainerLoading>
  )
}