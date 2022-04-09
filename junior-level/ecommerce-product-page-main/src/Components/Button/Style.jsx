import styled from "styled-components";

export const ButtonStyle = styled.button`
    all: unset;
    background-color: hsl(26, 100%, 55%) ;
    color: #fff;
    font-weight: bold;
    padding: 15px 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        opacity: 0.5;
    }
`