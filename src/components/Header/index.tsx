import {  CartCotainer, HeaderContainer, LocationContainer, LogoContainer } from "./styles";
import logo from '../../assets/logo.svg'
import {MapPin, ShoppingCart } from "@phosphor-icons/react";
import {  useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
export function Header(){
    const navigate = useNavigate();
    const {cart} = useContext(CartContext)
    return(
        <HeaderContainer>
            <LogoContainer onClick={() => navigate("/")}>
                <img src={logo} alt="" />
            </LogoContainer>
            <section>
                <LocationContainer>
                    <MapPin size={22} weight="fill" />
                    <span>Itaitinga, CE</span>
                </LocationContainer>
                <CartCotainer onClick={() => navigate("/checkout")}>
                    <ShoppingCart size={22} weight="fill"/>
                    <span>{cart.length}</span>
                </CartCotainer>
            </section>
        </HeaderContainer>
    )
}