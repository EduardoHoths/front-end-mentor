import React from "react";
import { Thumbnails, Thumb, Photo, Wrapper, Container, Photos, Controler} from "./Style";

import photo1 from "../../../Assets/image-product-1.jpg";
import photo2 from "../../../Assets/image-product-2.jpg";
import photo3 from "../../../Assets/image-product-3.jpg";
import photo4 from "../../../Assets/image-product-4.jpg";

import useMedia from "../../Hooks/useMedia";
import useWindowResize from "../../Hooks/useWindowResize";

import thumb1 from "../../../Assets/image-product-1-thumbnail.jpg";
import thumb2 from "../../../Assets/image-product-2-thumbnail.jpg";
import thumb3 from "../../../Assets/image-product-3-thumbnail.jpg";
import thumb4 from "../../../Assets/image-product-4-thumbnail.jpg";

import { ReactComponent as Next } from "../../../Assets/icon-next.svg";
import { ReactComponent as Previous } from "../../../Assets/icon-previous.svg";

const MainLeft = ({ modal, setModal, index, setIndex }) => {
    const [active, setActive] = React.useState(0);
    const mobile = useMedia("(max-width: 750px)");
    const windowResize = useWindowResize();
    const imageRef = React.useRef();
    const [imageWidth, setImageWidth] = React.useState(null);

    React.useEffect(() => {
        setImageWidth(imageRef.current.clientWidth);
    }, [windowResize]);

    const classActive = (i) => (active == i ? "active" : "");
    function handleClick({ target }) {
        setIndex(target.getAttribute("index"));
    }

    React.useEffect(() => {
        setActive(index);
    }, [index]);

    function handleModal() {
        if (modal === undefined) {
            return;
        } else {
            setModal(true);
        }
    }

    function nextPhoto() {
        if (index < 3) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    function previousPhoto() {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(3);
        }
    }

    return (
        <Wrapper modal={modal}>
            <Container modal={modal} onClick={handleModal}>
                <Photos
                    style={{
                        transform: `translateX(calc(-${imageWidth}px * ${index}))`,
                    }}
                >
                    <img ref={imageRef} src={photo1} alt="" />
                    <img src={photo2} alt="" />
                    <img src={photo3} alt="" />
                    <img src={photo4} alt="" />
                </Photos>
            </Container>
            {modal == undefined || mobile ? (
                <Controler
                    onClick={previousPhoto}
                    className="previous"
                    mobile={mobile}
                >
                    <Previous />
                </Controler>
            ) : (
                ""
            )}
            {modal == undefined || mobile ? (
                <Controler onClick={nextPhoto} className="next" mobile={mobile}>
                    <Next />
                </Controler>
            ) : (
                ""
            )}
            <Thumbnails>
                <Thumb className={classActive(0)} onClick={handleClick}>
                    <img index="0" src={thumb1} />
                </Thumb>
                <Thumb className={classActive(1)} onClick={handleClick}>
                    <img index="1" src={thumb2} alt="" />
                </Thumb>
                <Thumb className={classActive(2)} onClick={handleClick}>
                    <img index="2" src={thumb3} alt="" />
                </Thumb>
                <Thumb className={classActive(3)} onClick={handleClick}>
                    <img index="3" src={thumb4} alt="" />
                </Thumb>
            </Thumbnails>
        </Wrapper>
    );
};

export default MainLeft;
