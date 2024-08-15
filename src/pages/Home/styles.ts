import styled from "styled-components";

export const HomeContainer = styled.div`
`

export const CoffeListContainer = styled.div`
    padding:0  10rem;
    h1{
        font-family: "Baloo 2", sans-serif;
        color: ${props => props.theme['base-title']};
        font-size: 32px;
        line-height: 130%;  
    }
`

export const CoffeCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
`

