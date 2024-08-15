import styled from "styled-components"
interface CoffeCardProps {
    quantity: number
}
export const CoffeCard = styled.div<CoffeCardProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: ${props => props.quantity > 0 ? `1px solid ${props.theme['purple-dark']}` : ''};

    gap: 0.5rem;
    img{
        transform: translateY(-2rem);
        width: 8rem;
    }

    margin-top: 3.3rem;
    margin-bottom: 2.5rem;
    height: 19rem;
    width: 16rem;
    background-color: ${props => props.theme['base-card']};
    border-end-start-radius: 36px;
    border-start-end-radius: 36px;
    padding-bottom: 1rem;
   .name{
    font-family: 'Baloo 2', sans-serif;
    font-size: 20px;
    line-height: 130%;
    font-weight: bold;
    margin-top:1rem;
   }

   .description{
    color: ${props => props.theme['base-label']};
    font-size: 14px;
    line-height: 130%;
    max-width: 14rem;
    height: 100%;
    word-wrap: break-word;
    text-overflow: ellipsis;
    text-align: center;
}
`

export const Tags = styled.div`
    padding: 0.25rem 0.5rem;
    background-color: ${props => props.theme['yellow-light']};
    border-radius: 6px;
    margin-top: -1.5rem;
    p{
        color: ${props => props.theme['yellow-dark']};
        font-size: 10px;
        line-height: 130%;
        font-weight: bold;
    }
`

export const Buy = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 13rem;
    margin-top:2rem;
    .price{
        font-family: 'Baloo 2', sans-serif;
        font-size: 24px;
        font-weight: bold;
    }

    .cifra{
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        color: ${props => props.theme['base-text']};
        font-weight: 100;
    }
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    .cart {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme['purple-dark']};
        border: 0;
        padding: 0.5rem;
        border-radius: 6px;
    }

    button{
        cursor: pointer;
    }
`

export const CounterContainer = styled.div`
    background-color: ${props => props.theme['base-button']};
    display: flex;
    padding:0.5rem;
    border-radius: 6px;
    gap: 0.25rem;

    span{
        font-size: 16px;
    }
    button{
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    svg{
        color: ${props => props.theme['purple']};
    }
    svg:hover{
        color: ${props => props.theme['purple-dark']};
    }

`