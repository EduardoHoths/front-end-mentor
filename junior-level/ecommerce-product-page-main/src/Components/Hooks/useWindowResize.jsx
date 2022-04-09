import React from "react";

const useWindowResize = () => {
    const [windowWidth, setWindowWidth] = React.useState(null);

    function resize() {
        setWindowWidth(window.innerWidth);
        return window.removeEventListener("resize", resize);
    }

    window.addEventListener("resize", resize);

    return windowWidth;

};

export default useWindowResize;
