import React from "react";
import Modal from "../../Modal/Modal";
import MainLeft from "../MainLeft/MainLeft";
import MainRight from "../MainRight/MainRight";
import { MainStyle } from "./Style";

const Main = () => {
    const [modal, setModal] = React.useState(false);
    const [index, setIndex] = React.useState(0);

    return (
        <MainStyle>
            <MainLeft modal={modal} setModal={setModal} index={index} setIndex={setIndex}/>
            <MainRight />
            <Modal modal={modal} setModal={setModal} index={index} setIndex={setIndex}/>
        </MainStyle>
    );
};

export default Main;
