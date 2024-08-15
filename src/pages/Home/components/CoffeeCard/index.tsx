import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { Actions, Buy, CoffeCard, CounterContainer, Tags } from "./styles";
import { useContext, useEffect, useState } from "react";
import coffe from  '../../../../assets/coffees/coffee.png';
import { CartContext, ItemCart } from "../../../../contexts/CartContext";
import { priceFormatter } from "../../../../utils/formatter";

export interface CoffeeCardProps{
    id: string
    title: string,
    price: string,
    description:string,
}

export function CoffeeCard({title, price, description, id}:CoffeeCardProps){
    
    const { AddItemInCart, cart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(0);

    useEffect(()=>{
        setQuantity(cart.find(item => item.id === id)?.quantity || 0)
    },[])

    console.log(cart)

    function handleAddCoffeInCart(){
        const coffee: ItemCart = {title, price, description, id, quantity}
        AddItemInCart(coffee);
    }

    return (
        <CoffeCard quantity={quantity}>
            <img src={coffe} alt="" />
            <Tags>
                <p>TRADICIONAL</p>
            </Tags>
            <span className="name">{title}</span>
            <span className="description">{description}</span>
            <Buy>
                <span className="price"><span className="cifra"></span>{priceFormatter.format(parseFloat(price))}</span>
                <Actions>
                <CounterContainer>
                    <button onClick={()=> setQuantity(quantity-1)}><Minus size={16}/></button>
                    <span>{quantity}</span>
                    <button onClick={()=> setQuantity(quantity+1)}><Plus size={16}/></button>
                </CounterContainer>
                <button className="cart"  onClick={()=> handleAddCoffeInCart()}>
                    <ShoppingCart size={22} weight="fill" color="white"/>
                </button>
                </Actions>
            </Buy>
        </CoffeCard>
    )
}