import styled from "styled-components";

export const BackgroundRegister = styled.div`
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

export const MainContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 5px;
  padding: 50px 30px;
  height: 40%;
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ButtonRegister = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ff7900;
  color: white;
  transition: .3s;
  &:hover{
    background-color: #FF4800;

  }
`
//link palette orange https://coolors.co/palette/ff4800-ff5400-ff6000-ff6d00-ff7900-ff8500-ff9100-ff9e00-ffaa00-ffb600