import React from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header/Header/Header";
import Main from "./Components/Main/Main/Main";
import {GlobalStorage} from "./GlobalStorage";

const App = () => {
    return (
        <>
            <GlobalStorage>
                <Header />
                <Main />
                <GlobalStyle />
            </GlobalStorage>
        </>
    );
};

export default App;
