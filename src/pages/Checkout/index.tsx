import { useContext, useState } from "react"
import { CartContext } from "../../contexts/CartContext"
import { ActionsOrder, CheckoutContainer, CoffeeCardOrder, CoffesSelectedContainer, CompleteYourOrderContainer, CompleteYourOrderContent, CompleteYourOrderForm, CounterContainer, FormGroupBairroCidadeUF, FormGroupNumeroCompleto, InfoOrder, PaymentType, PaymentTypeButton } from "./styles"
import coffe from '../../assets/coffees/coffee.png'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "@phosphor-icons/react"
import { priceFormatter } from "../../utils/formatter"
import { useNavigate } from "react-router-dom"

export function Checkout(){
    const {cart, ChangeQuantity} = useContext(CartContext);
    const [deliveryValue, setDeliveryValue] = useState(3.5);
    const navigate = useNavigate();

    const items = cart.reduce(
        (acc, cart) => {
          acc.total += (parseFloat(cart.price)*cart.quantity);
          return acc
        },
        {
          total: 0,
        },
      )

      const total = items.total + deliveryValue;
    return(

        <CheckoutContainer>
            <CompleteYourOrderContainer>
                <h1>Complete o Pedido</h1>
                <CompleteYourOrderContent>
                    <header>
                        <MapPinLine size={22}/>
                        <div>
                            <span>
                                Endereço de Entrega
                                <br/>
                                Informe o endereço onde deseja receber seu pedido de Entrega
                            </span>
                        </div>
                    </header>
                    <CompleteYourOrderForm className="infoForm">
                        <input type="text" placeholder="CEP"/>
                        <input type="text" placeholder="Rua"/>
                        <FormGroupNumeroCompleto>
                            <input type="text" placeholder="Número" />
                            <input type="text" placeholder="Complemento" />
                        </FormGroupNumeroCompleto>
                        <FormGroupBairroCidadeUF>
                            <input type="text" placeholder="Bairro" />
                            <input type="text" placeholder="Cidade"/>
                            <input type="text" placeholder="UF"/>
                        </FormGroupBairroCidadeUF>
                    </CompleteYourOrderForm>
                </CompleteYourOrderContent>
                <CompleteYourOrderContent>
                    <header>
                        <CurrencyDollar size={22}/>
                        <section>
                            <span>
                                Pagamento   
                                <br/>
                                O pagamento é feito na entrega. Escolha a forma que deseja pagar
                            </span>
                        </section>
                    </header>
                    <PaymentType className="paymentForm">
                        <PaymentTypeButton value="credit"><CreditCard size={16}/> CARTÃO DE CRÉDITO</PaymentTypeButton>
                        <PaymentTypeButton value="bank"><Bank size={16} /> CARTÃO DE DÉBITO</PaymentTypeButton>
                        <PaymentTypeButton value="money"><Money size={16} /> DINHEIRO</PaymentTypeButton>
                    </PaymentType>
                </CompleteYourOrderContent>
            </CompleteYourOrderContainer>
            <CoffesSelectedContainer>
                <h1>Cafés selecionados</h1>
                <main>
                    <div className="ContainerCard">

                    {cart.map(item =>(
                            <>
                                <CoffeeCardOrder>
                                    <img src={coffe} alt="" width={64}/>
                                    <InfoOrder>
                                        <div className="descOrde">
                                            <span className="title">{item.title}</span>
                                            <span className="price">{priceFormatter.format(parseFloat(item.price))}</span>
                                        </div>
                                        <ActionsOrder>
                                            <CounterContainer>
                                                <button onClick={()=> ChangeQuantity(item.id, -1)}><Minus size={16}/></button>
                                                <span>{item.quantity}</span>
                                                <button onClick={()=> ChangeQuantity(item.id, 1)}><Plus size={16}/></button>
                                            </CounterContainer>
                                            <button className="remover"><Trash size={16}/></button>
                                        </ActionsOrder>
                                    </InfoOrder>
                                </CoffeeCardOrder>
                            </>
                        ))}
                    </div>

                        <div className="Totais">
                            <section className="TotalItems"><span>Total de Items</span><span>{priceFormatter.format(items.total)}</span></section>
                            <section className="Delivery"><span>Entrega</span><span>{priceFormatter.format(deliveryValue)}</span></section>
                            <section className="Total"><span>Total</span><span>{priceFormatter.format(total)}</span></section>
                        </div>
                        <button className="confirmar" onClick={() => navigate('/sucess')}>CONFIRMAR PEDIDO</button>      
                </main>
            </CoffesSelectedContainer>
        </CheckoutContainer>
    )
}