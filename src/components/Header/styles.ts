import styled from "styled-components";

export const HeaderContainer =  styled.header`
    padding: 2rem 10rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    section{
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }


`

export const LogoContainer = styled.button`
 border: 0;
 background: transparent;
 cursor: pointer;
`
export const LocationContainer = styled.div`
    border-radius: 6px;
    background-color: ${props => props.theme['purple-light']};
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    span {
        color: ${props => props.theme['purple-dark']};
    }

    svg{
        color: ${props => props.theme['purple-dark']};
    }
`

export const CartCotainer = styled.button`
    border: 0;
    cursor: pointer;
    background-color: ${props => props.theme['yellow-light']};
    padding: 0.5rem;
    border-radius: 6px;
    /* width: 2.375rem;
    height: 2.375rem; */
    display: flex;
    align-items: center;
    svg{
        color: ${props => props.theme['yellow-dark']};
    }

    span{
        position: absolute;
        transform: translate(1rem, -1rem);
        color: white;
        background-color: ${props => props.theme["yellow-dark"]};
        border-radius: 1000px;
        width: 1.2rem;
        height: 1.2rem;
        display: flex;
        font-size: 12px;
        font-weight: bold;
        align-items: center;
        justify-content: center;
    }
`