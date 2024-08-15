import styled from "styled-components"

export const SucessContainer = styled.div`
    padding: 0 10rem;

    h1{
        font-family: 'Baloo 2', sans-serif;
        font-size: 32px;
        color: ${props => props.theme["yellow-dark"]};

    }

    span{
        font-size: 20px;
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const OrderInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2.5rem;
    
`

export const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    border-end-start-radius: 40px;
    border-start-end-radius: 40px;
    border: 1px solid ${props => props.theme["purple"]};
    padding: 2rem;

    div{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        margin-top:1rem;

        section{
            display: flex;
            flex-direction: column;

            span{
                color: ${props => props.theme["base-text"]};
            }
        }
    
    svg{
            color: white;
        }
   }
   
`