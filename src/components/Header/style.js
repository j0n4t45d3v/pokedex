import styled from "styled-components";

export const ContainerHeader = styled.header`
    position: absolute;
    top:0;
    width: 100%;
    height: 70px;
    background-color: #FF4800;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 20px;
    z-index: 1000000000;
`

export const IconUser = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
    border-radius: 50%;
`

export const NameUser = styled.p`
    color: white;
    font-weight: 700;
`
