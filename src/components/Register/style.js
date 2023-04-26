import styled from 'styled-components';

export const BackgroundRegister = styled.div`
  background-color: #ff7900;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  align-self: center;
  margin: 0;
`;

export const MainContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  padding: 50px 30px;
  height: 400px;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonRegister = styled.button`
  position: relative;
  bottom: -30px;
  padding: 10px 20px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #ff4800;
  color: white;
  transition: 0.3s;
  &:hover {
    background-color: #ff7900;
  }
`;

export const LinkRegister = styled.a`
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border-bottom: 1.5px solid;
`;
//link palette orange https://coolors.co/palette/ff4800-ff5400-ff6000-ff6d00-ff7900-ff8500-ff9100-ff9e00-ffaa00-ffb600
