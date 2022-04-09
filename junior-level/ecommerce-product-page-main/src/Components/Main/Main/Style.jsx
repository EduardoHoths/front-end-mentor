import styled from "styled-components";


export const MainStyle = styled.main`
    
    max-width: 1040px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin: 50px 0;
    padding: 0 5%;
    gap: 20px;

    @media (min-width: 1040px) {
        margin: 50px auto;
    }
    @media (max-width: 750px) {
        grid-template-columns: 1fr;
        margin: 0;
        padding: 0;
    }

    /* border: 1px solid red; */
`