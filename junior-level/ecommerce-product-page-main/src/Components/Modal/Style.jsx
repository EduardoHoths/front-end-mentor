import styled, {keyframes} from 'styled-components';



export const ModalStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0, 0.75);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    
`

export const Button = styled.button`
    all: unset;
    cursor: pointer;

    svg path{
        fill: #fff;
    }
`
export const CloseDiv = styled.div`
    width: 400px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
`