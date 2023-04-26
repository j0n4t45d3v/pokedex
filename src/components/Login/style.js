import styled from "styled-components";

export const BackgroundLogin = styled.div`
  background-color: #ff7900;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  align-self: center;
  margin: 0;
`

export const MainContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  padding: 50px 30px;
  height: 350px;
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const ContainerButton = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

export const LinkRegister = styled.a`
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  padding: 0;
  margin: 0;
  margin: auto;
  
  border-bottom: 1.7px solid;
`

export const ButtonLogin = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ff4800;
  color: white;
`