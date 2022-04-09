import styled from "styled-components";

export const Cart = styled.div`
    position: absolute;
    top: 200%;
    right: -550%;
    width: 360px;
    box-shadow: 0 10px 25px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    z-index: 1;
    background-color: white;

    @media (max-width: 655px) {
        top: 300%;
        right: -450%;
    }

    @media (max-width: 400px) {
        width: 340px;
    }
    @media (max-width: 374px) {
        width: 280px;
        right: -350%;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ButtonStyle = styled.button`
    all: unset;
`;

export const Title = styled.div`
    font-weight: bold;
    padding: 20px 25px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);

    @media (max-width: 655px) {
        padding: 20px 10px;
    }
`;

export const Products = styled.div`
    background-color: white;
    height: 180px;
    display: flex;
    padding: 10px 20px;
    flex-direction: column;
    justify-content: ${(props) => (props.product > 0 ? "none" : "center")};
    align-items: ${(props) => (props.product > 0 ? "none" : "center")};

    @media (max-width: 655px) {
        padding: 10px 10px;
    }
`;

export const Product = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    height: 70px;
    margin: 20px 0;

    img{
        width: 70px;
        height: 70px;
        border-radius: 10px;
    }
    span{
        font-weight: bold;
        color: black;
    }
    button {
        all: unset;
        cursor: pointer;
        margin-right: 15px;
    }
    p{
        font-size: 0.9rem;
        line-height: 1.5rem;
        color: hsl(219, 9%, 45%);
    }
`

export const Quantity = styled.div`
    position: absolute;
    top: -10px;
    right: -13px;
    background-color: hsl(26, 100%, 55%) ;
    color: #fff;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0px 10px;
    border-radius: 10px;
`
