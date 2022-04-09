import React from "react";
import MainLeft from "../Main/MainLeft/MainLeft";
import { Button, CloseDiv, ModalStyle } from "./Style";

import { ReactComponent as CloseIcon } from "../../Assets/icon-close.svg";

const Modal = ({ modal, setModal, index, setIndex }) => {

    function closeModal({target, currentTarget}) {
        if(target === currentTarget){
            setModal(false)
        }
    }

    if (!modal) return null;
    return (
        <ModalStyle onClick={closeModal}>
            <CloseDiv>
                <Button onClick={() => setModal(!modal)}>
                    <CloseIcon />
                </Button>
            </CloseDiv>
            <MainLeft index={index} setIndex={setIndex} />
        </ModalStyle>
    );
};

export default Modal;
