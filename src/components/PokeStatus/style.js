import styled from 'styled-components';




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
    width: ${ ({ percentual }) => percentual }%;
    max-width: 120%;
    height: 6px;
    ${ ({ percentual }) => percentual < 50 ? 'background-color: #ff0000;' : 'background-color: #23dd7a;' }
    border-radius: 3px;
  }

`;


