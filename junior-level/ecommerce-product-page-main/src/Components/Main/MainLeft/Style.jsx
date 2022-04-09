import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from{
        opacity: 0;
        transform: scale(0.9);
    }
     to{
         opacity: 1;
         transform: scale(1);
     }
`;

export const Wrapper = styled.div`
    width: 400px;
    animation: ${({ modal }) => (modal === undefined ? fadeIn : "none")} 0.3s;
    position: relative;

    @media (max-width: 750px) {
        width: 100%;
        
    }
    
    
`;

export const Controler = styled.button`

&.previous,
    &.next {
        all: unset;
        position: absolute;
        top: ${({mobile})=> mobile ? "50%" : "45%"};
        transform: ${({mobile})=> mobile ? "translateY(-50%)" : "translateY(-70%)"};
        background-color: #fff;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        text-align: center;
        cursor: pointer;

        svg path {
            transition: 0.2s;
        }
        &:hover svg path {
            stroke: hsl(26, 100%, 55%);
        }
    }
    &.previous {
        left: ${({mobile}) => mobile ? "20px" : "-20px"};

        svg {
            margin-left: -5px;
            margin-top: 5px;
        }
    }
    &.next {
        right: ${({ mobile }) => (mobile ? "20px" : "-20px")};

        svg {
            margin-right: -5px;
            margin-top: 5px;
        }
    }

`

export const Container = styled.div`
    cursor: ${(props) => (props.modal === undefined ? "default" : "pointer")};
    width: 400px;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;


    @media (max-width: 750px) {
        width: 100%;
        border-radius: 0;
    }

    @media (max-width: 375px) {
            height: 250px;
        }
`;

export const Photos = styled.div`
    display: flex;
    transition: transform 0.5s;
    width: 100%;
    height: 100%;

    

    img {
        flex-shrink: 0;
        width: 100%;
        height: 100%;

        
    }
`;

export const Thumbnails = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    @media (max-width: 750px) {
        display: none;
    }
`;

export const Thumb = styled.button`
    all: unset;
    cursor: pointer;
    width: 75px;
    height: 75px;
    border-radius: 10px;
    overflow: hidden;
    transition: 0.3s;
    border: 1px solid transparent;

    img {
        width: 100%;
        height: 100%;
    }

    &:hover {
        opacity: 0.5;
    }

    &.active {
        border: 1px solid hsl(26, 100%, 55%);

        img {
            opacity: 0.5;
        }
        &:hover {
            opacity: 1;
        }
    }
`;
