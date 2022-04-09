import React from "react";
import Button from "../../Button/Button";
import {
    Wrapper,
    CompanyName,
    Price,
    Discount,
    Description,
    AddToCart,
    Amount,
    Control
} from "./Style";

import {ReactComponent as Plus} from '../../../Assets/icon-plus.svg'

import {ReactComponent as Cart} from '../../../Assets/icon-cart.svg'
import Minus from '../../../Assets/icon-minus.svg'
import {GlobalContext} from "../../../GlobalStorage";


const MainRight = () => {
    const {amount, setAmount, productOnCart} = React.useContext(GlobalContext);

    
    function handleDecrease(){
        if(amount === 0) return;
        setAmount(amount - 1);
    }
    function handleIncrease(){
        setAmount(amount + 1);
    }

    return (
        <Wrapper>
            <CompanyName>SNEAKER COMPANY</CompanyName>

            <h1>Fall Limited Edition Sneakers</h1>

            <Description>
                These low-profile sneakers are your perfect casual wear
                companion. featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
            </Description>

            <div>
                <Price>
                    $125.00 <span>50%</span>
                </Price>
                <Discount>$250.00</Discount>
            </div>
            <AddToCart>
                <div>
                    <Control onClick={handleDecrease}><img src={Minus} alt="" /></Control>
                    <Amount>{amount}</Amount>
                    <Control onClick={handleIncrease}><Plus/></Control>
                </div>
                <Button  onClick={productOnCart}><Cart/> Add to Cart</Button>
            </AddToCart>
        </Wrapper>
    );
};

export default MainRight;
