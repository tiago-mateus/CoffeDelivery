import { Intro } from "../../components/Intro";
import { CoffeCardContainer, CoffeListContainer, HomeContainer } from "./styles";
import { coffees } from '../../data.json';
import { CoffeeCard } from "./components/CoffeeCard";
export function Home(){
    return(
        <HomeContainer>
            <Intro />
            <CoffeListContainer>
                <h1>Nossos cafés</h1>
                <CoffeCardContainer>
                    {coffees.map((coffee) => (
                        <CoffeeCard title={coffee.title} price={coffee.price.toString()} description={coffee.description} id={coffee.id} />
                    ))}
                </CoffeCardContainer>
            </CoffeListContainer>
        </HomeContainer>
    )
}