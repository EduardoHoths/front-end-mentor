import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    
    h1 {
        font-size: 3rem;

        @media (max-width: 900px) {
            font-size: 2rem;
        }
    }

    @media (max-width: 750px){
        max-width: 400px;
        width: calc(100% - 40px);
        padding: 0 20px;
        gap: 20px;
    }

`;

export const CompanyName = styled.span`
    color: hsl(26, 100%, 55%);
    font-weight: bold;
`;

export const Price = styled.p`
    color: black;
    font-weight: bold;
    font-size: 2rem;
    display: flex;
    align-items: center;
    gap: 10px;

    span {
        color: hsl(26, 100%, 55%);
        font-weight: bold;
        font-size: 1.1rem;
        background-color: hsl(25, 100%, 94%);
        padding: 2px 7px;
        border-radius: 10px;
    }
`;

export const Discount = styled.p`
    text-decoration: line-through;
    font-weight: bold;
    color: hsl(220, 14%, 75%);
    font-size: 1.3rem;
    margin-top: 5px;
`;

export const Description = styled.p`
    color: hsl(219, 9%, 45%);
`;

export const AddToCart = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 20px;
    }
    @media (max-width: 750px) {
        div{
            width: 100%;
            justify-content: space-between;
        }
        

        button:nth-child(2) {
            width: 100%;
            padding: 15px 0;
            margin-bottom: 10px;
        }
    }

    div {
        background-color: hsl(223, 64%, 98%);
        height: 50px;
        border-radius: 10px;
        overflow: hidden;
        
        display: flex;
        align-items: center;
    }

    svg {
        margin-right: 10px;
        path {
            fill: #fff;
        }
    }
`;

export const Control = styled.button`
    all: unset;
    padding: 0 20px;
    font-weight: bold;
    font-size: 1.5rem;
    color: hsl(26, 100%, 55%);
    cursor: pointer;
    height: 50px;
    display: flex;
    align-items: center;
    transition: 0.3s;
    &:hover{
        opacity: 0.5;
    }
    svg {
        path {
            fill: hsl(26, 100%, 55%);
        }
    }
`;
export const Amount = styled.span`
    font-weight: bold;
    padding: 0 10px;
`;
