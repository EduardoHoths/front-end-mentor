import styled from "styled-components";

export const HeaderStyle = styled.header`
    padding: 0 4%;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    height: 95px;
    max-width: 1140px;
    
    
    @media (min-width: 1140px) {
        margin: 0 auto;
    }

    .HeaderDiv {
        display: flex;
        gap: 40px;
        align-items: center;
        @media (max-width: 345px) {
            gap: 20px;
        }
        button.menu{
            all: unset;
            cursor: pointer;
        }
    }

    &::after {
        content: "";
        background-color: rgba(0, 0, 0, 0.1);
        width: 100%;
        height: 1px;
        position: absolute;
        top: 100%;
    }
`;

export const Menu = styled.div`
    background-color: rgba(0,0,0, 0.7);
    width: 100vw;
    @media (max-height: 835px) {
        width: calc(100vw - 16px);
    }
    
    height: 100vh;
    position: fixed;
    left:0;
    z-index: 999;

`;
