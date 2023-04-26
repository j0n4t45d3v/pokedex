import styled from 'styled-components';

export const ContainerMenu = styled.div`
  position: absolute;
  right: 0;
  top: 10;
  width: 300px;
  padding: 10px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
`;

export const OptionsMenu = styled.p`
  margin-top: 12px;
  text-align: center;
  width: 90%;

  border-bottom: 2px solid transparent;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid;
    transition: 0.6s;
  }
`;

export const Logout = styled.button``;
