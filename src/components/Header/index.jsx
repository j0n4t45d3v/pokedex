import { ContainerHeader, IconUser, NameUser } from "./style";
import userIcon from "../../assets/icon-user-male.jpg"


// eslint-disable-next-line react/prop-types
export function Header({nameUser}){
    return(
        <ContainerHeader>
            <NameUser>{nameUser}</NameUser>
            <IconUser src={userIcon}/>
        </ContainerHeader>
    )
}