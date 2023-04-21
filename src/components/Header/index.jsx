import { ContainerHeader, IconUser, NameUser } from "./style";
import userIcon from "../../assets/icon-user-male.jpg"


export function Header(){
    return(
        <ContainerHeader>
            <NameUser>Name</NameUser>
            <IconUser src={userIcon}/>
        </ContainerHeader>
    )
}