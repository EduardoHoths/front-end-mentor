import styled, { keyframes } from "styled-components";

const animeleft = keyframes`
    from{
        transform: translateX(-10px);
        opacity: 0;
    }
    to{
        transform: translateX(0px);
        opacity: 1;
    } 
`;



export const Nav = styled.nav`
    display: flex;
    gap: 30px;

    a {
        color: hsl(219, 9%, 45%);
        position: relative;
        height: 95px;
        display: flex;
        align-items: center;
        border-bottom: 5px solid transparent;
        transition: 0.5s;

        &:hover {
            border-bottom: 5px solid hsl(26, 100%, 55%);
        }
    }

    ${({ mobileMenu }) =>
        mobileMenu &&
        `
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        position: absolute;
        top: 0;
        left: 0;

        padding: 0 3rem;
        
        height: 100vh;
        width: 40%;
        background: #fff;
        z-index: 1;

        
        a{
            all: unset;
        }
        button{
            all: unset;
            margin: 2.5rem 0;
            cursor: pointer;
        }
    `}

    animation: ${({ showMenu }) => showMenu == true && animeleft } 0.5s;
`;
