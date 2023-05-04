import styled from 'styled-components';

export const MainContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 100000000;
  height: 80%;
  width: 80%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 10px;
  background-color: orange;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Type = styled.p`
  font-size: 20px;
  background-color: black;
  border-radius: 5px;
  padding: 3px 5px;
  color: white;
`;

export const TitleName = styled.h1`
  font-size: 60px;
`;

export const StatusBar = styled.div`
  width: 100%;
  height: 6px;
  background-color: #fcfcfc;
  border-radius: 3px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percentual }) => percentual}%;
    max-width: 120%;
    height: 6px;
    ${({ percentual }) =>
      percentual < 50
        ? 'background-color: #ff0000;'
        : 'background-color: #23dd7a;'}
    border-radius: 3px;
  }
`;

export const Descriptions = styled.ul``;

export const DescriptionsLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PStatus = styled.p`
  align-self: flex-start;
`;