import { OrderInfo, OrderInfoContainer, SucessContainer } from "./styles";
import illustration from '../../assets/Illustration.png'
import { Items } from "../../components/Intro/Items";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
export function Sucess(){
    return(
        <SucessContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <span>Agora é só aguardar que logo o café chegará até você</span>
            <OrderInfoContainer>
                <OrderInfo>
                    <section>
                    <div>
                        <Items 
                            iconBgColor="purple">
                            <MapPin size={16} weight="fill"/>
                        </Items>
                        <section>
                            <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
                            <span>Farrapos - Porto Alegre, RS</span>
                        </section>
                    </div>
                    <div>
                        <Items 
                            iconBgColor="yellow">
                            <Timer size={16} weight="fill"/>
                        </Items>
                        <section>
                            <span>Previsão de entrega</span>
                            <span><strong>20min - 30min</strong></span>
                        </section>
                    </div>
                    <div>
                        <Items 
                            iconBgColor="yellow-dark">
                            <CurrencyDollar size={16} weight="fill"/>
                        </Items>
                        <section>
                            <span>Pagamento na entrega</span>
                            <span><strong>Cartão de Crédito</strong></span>
                        </section>
                    </div>     
                    </section>
                </OrderInfo>
                <img src={illustration} alt="" />
            </OrderInfoContainer>
        </SucessContainer>
    )
}