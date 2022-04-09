import styled from 'styled-components'

export const UserStyle = styled.img`
    width: 50px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: 0.5s ;
    border-radius: 50%;

    &:hover{
        border: 2px solid hsl(26, 100%, 55%);
    }
`