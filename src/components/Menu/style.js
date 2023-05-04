import styled, { keyframes } from 'styled-components';

const topDown = keyframes`
  0% {
    height: 0;
  }
  25% {
    height: 25px;
  }
  50% {
    height: 50px;
  }
  75% {
    height: 75px;
  }
  100% {
    height: 100px;
  }
`

export const ContainerMenu = styled.div`
  position: absolute;
  right: 0;
  top: 10;
  width: 300px;
  height: 100px;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
  opacity: .96;
  box-shadow: 1px 4px 15px black;
  transition: .3s;
  animation: ${topDown} .01s 1 linear;
`;

export const OptionsMenu = styled.p`
  margin-top: 12px;
  text-align: center;
  width: 90%;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    border-bottom: 2px solid;
  }
`;

export const Logout = styled.button`
  padding: 4px 10px;
  font-size: 15px;
  border-radius: 5px;
  border: none;
  background-color: orange;
  font-weight: 700;
    color: white;
  transition: .6s;
  &:hover{
    background-color: red;
    color: white;
    
  }
`;
