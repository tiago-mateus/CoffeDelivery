import styled from "styled-components"
import bg from '../../assets/background.jpg'

export const IntroContainer = styled.div`
    background: url(${bg});
    background-size: cover;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 5.875rem 10rem;
    gap: 10rem;
    section{
        width: 36rem;
    }
`

export const TitleContainer = styled.div`
   
    h1{
        font-family: "Baloo 2", sans-serif;
        color: ${props => props.theme['base-title']};
        font-size: 48px;
        line-height: 130%;
    }

    span{
        font-size: 20px;
        line-height: 130%;
        color: ${props => props.theme['base-subtitle']};
    }
`

export const ItemsContainer = styled.div`
    margin-top: 4.125rem;
    display: grid;
    grid-template-columns: 18rem 18rem;
    gap: 1rem;

    section{
        display: flex;
        align-items: center;
        gap: 0.75rem;

        span{
            color: ${props => props.theme['base-text']};
        }

        svg{
            color: white;
        }
    }
`