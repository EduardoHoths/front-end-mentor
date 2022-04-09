import React from "react";
import { ReactComponent as CartIcon } from "../../../Assets/icon-cart.svg";
import { GlobalContext } from "../../../GlobalStorage";
import { Wrapper, ButtonStyle, Cart, Title, Products, Product,Quantity } from "./Style";
import Button from '../../Button/Button'

import preview from "../../../Assets/image-product-1-thumbnail.jpg";
import { ReactComponent as Delete } from "../../../Assets/icon-delete.svg";

const HeaderCart = () => {
    const [active, setActive] = React.useState(false);
    const { product, removeProductOnCart } = React.useContext(GlobalContext);

    function handleClick() {
        setActive(!active);
    }
    return (
        <Wrapper>
            <ButtonStyle onClick={handleClick}>
                <CartIcon style={{ cursor: "pointer" }} />
            </ButtonStyle>
            {product > 0 && <Quantity>{product}</Quantity>}
            {active && (
                <Cart>
                    <Title>Cart</Title>
                    <Products product={product}>
                        {product > 0 ? (
                            <>
                                
                                <Product>
                                    <img src={preview} alt="" />
                                    <p>
                                    Fall Limited Edition Sneakers $125.00 x {product}{" "}
                                        <span>${125 * product}.00</span>
                                    </p>
                                    <button onClick={removeProductOnCart}>
                                        <Delete />
                                    </button>
                                </Product>
                                <Button>Checkout</Button>
                            </>
                        ) : (
                            <p
                                style={{
                                    fontWeight: "bold",
                                    color: "hsl(219, 9%, 45%)",
                                }}
                            >
                                Your cart is empty.
                            </p>
                        )}
                    </Products>
                </Cart>
            )}
        </Wrapper>
    );
};

export default HeaderCart;
