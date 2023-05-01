import styled from 'styled-components';

export const ContainerMenu = styled.div`
  position: absolute;
  right: 0;
  top: 10;
  width: 300px;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
  opacity: .96;
  box-shadow: 1px 4px 15px black;
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
