import { useNavigate } from "react-router-dom";
import { ContainerMenu, Logout, OptionsMenu } from "./style";

export function Menu(){
  const navigate = useNavigate()

  function handleLogout(){
    localStorage.removeItem("user")
    navigate("/")
  }

  return( 
    <ContainerMenu>
      <OptionsMenu onClick={() => navigate("/favorite")}>Favoritos</OptionsMenu>
      <Logout onClick={handleLogout}>SAIR</Logout>
    </ContainerMenu>
  )
}