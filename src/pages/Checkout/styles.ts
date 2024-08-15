import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';
export const CheckoutContainer = styled.div`
display: grid;
grid-template-columns: 1fr 0.7fr;
gap: 2rem;
padding: 0 10rem;
`

export const CoffesSelectedContainer = styled.div`

 h1{
    font-family: 'Baloo 2', serif;
    font-size: 18px;
 }

 main{
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px 44px;
    padding: 2rem 3.5rem;
    display: flex;
    flex-direction: column;
    .ContainerCard{
      max-height: 20rem;
      overflow-y: auto;
      scrollbar-width: thin;
    }
   .Totais{
      margin: 1.2rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .TotalItems{
      display: flex;
      justify-content: space-between;
      
         font-size: 14px;
     
    }
    .Delivery{
      display: flex;
      justify-content: space-between;
      font-size: 14px;

    }
    .Total{
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      font-weight: bold;
    }
   }
    

    .confirmar{
      background-color: ${props => props.theme['yellow']};
      padding: 0.75rem;
      border-radius: 6px;
      border: 0;
      color: white;
      cursor: pointer;
    }
 }
`

export const CompleteYourOrderContainer = styled.div`

 h1{
    font-family: 'Baloo 2', serif;
    font-size: 18px;
 }

`

export const CompleteYourOrderContent = styled.div`
   background-color: ${props => props.theme['base-card']};
   display: flex;
   flex-direction: column;
   border-radius: 6px;
   padding: 2.5rem;
   margin-bottom: 1rem;
   gap: 2rem;
   
   header{
      display: flex;
      align-items: start;
      gap: 1rem;
      padding:0  1rem;

      svg{
         color: ${props => props.theme['yellow']};
      }
   }

   .infoForm{
      display: flex;
      flex-direction: column;
      gap: 1rem;

      input{
      margin-left: 0.75rem;
      height: 2.6rem;
      background-color: ${props => props.theme['base-input']};
      border: 1px solid ${props => props.theme['base-button']};
      border-radius: 4px;
      padding: 0 1rem;
   }
   }



`
export const PaymentType = styled(RadioGroup.Root)`
   display: flex;
      flex-direction: row ;
      justify-content: center;
      gap: 0.75rem;

`

export const PaymentTypeButton = styled(RadioGroup.Item)`
   width: 100%;
   align-items: center;
   justify-content: center;
   padding: 1rem;
   background-color: ${props => props.theme['base-button']};
   border: 0;
   border-radius: 6px;
   font-size: 12px;
   color: ${props => props.theme['base-text']};
   display: flex;
   gap: 0.75rem;
   cursor: pointer;
   svg{
      color: ${props => props.theme['purple']};
   }

   &[data-state='checked'] {
      background-color: ${props => props.theme['purple-light']};
      border: 1px solid ${props => props.theme['purple-dark']};
  }
`

export const CompleteYourOrderForm = styled.form`

   
`
export const FormGroupNumeroCompleto = styled.div`
   display: grid;
   grid-template-columns: 200px 1fr;
`

export const FormGroupBairroCidadeUF = styled.div`
   display: grid;
   grid-template-columns: 200px 1fr 75px;
`

export const CoffeeCardOrder = styled.div`
   display: flex;
   gap: 1rem;
   padding:1.5rem 0;
   border-bottom: 1px solid ${props => props.theme['base-button']};
`
export const InfoOrder = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   width: 100%;
   .descOrde{
      display: flex;
      justify-content: space-between;

      .price{
         font-size: 16px;
         font-weight: bold;
         color: ${props => props.theme['base-text']};
      }
   }
`

export const ActionsOrder = styled.div`
   display: flex;

   .remover{
        border: 0;
        background-color: ${props => props.theme['base-button']};
        padding:0.5rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        border-radius: 6px;
        gap: 0.25rem;
        margin-left: 0.5rem;
        color: ${props => props.theme['base-text']};
        svg{
        color: ${props => props.theme['purple']};
        font-size: 12px;
    }
   }
`

export const CounterContainer = styled.div`
   background-color: ${props => props.theme['base-button']};
   display: flex;
   border-radius: 6px;
   gap: 0.25rem;
   padding:0.5rem;

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