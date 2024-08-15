import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { Items } from "./Items";
import { IntroContainer, ItemsContainer, TitleContainer } from "./styles";
import coffe from '../../assets/coffe-intro.png';

export function Intro(){
        return (
            <IntroContainer>
                <section>
                    <TitleContainer>
                        <h1>Encontre o café perfeito para qualquer hora do dia!</h1>
                        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</span>
                    </TitleContainer>
                    <ItemsContainer>
                        <Items 
                            texto="Compra simples e segura" 
                            iconBgColor="yellow-dark">
                            <ShoppingCart size={16} weight="fill"/>
                        </Items>
                        <Items 
                            texto="Embalagem mantém o café intacto" 
                            iconBgColor="base-text">
                            <Package size={16} weight="fill"/>
                        </Items>
                        <Items 
                            texto="Entrega rápida e rastreada" 
                            iconBgColor="yellow">
                            <Timer size={16} weight="fill"/>
                        </Items>
                        <Items 
                            texto="O café chega fresquinho até você" 
                            iconBgColor="purple">
                            <Coffee size={16} weight="fill"/>
                        </Items>
                    </ItemsContainer>
                </section>
                <img src={coffe} alt="" />
            </IntroContainer> 
        )
}