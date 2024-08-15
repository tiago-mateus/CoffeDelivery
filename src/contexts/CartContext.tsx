import { produce } from "immer"
import { createContext, ReactNode, useState } from "react"


export interface ItemCart {
    id: string,
    title: string,
    price: string,
    description:string,
    quantity: number
}

interface CartProviderProps{
    children: ReactNode
}

interface CartContextType {
    cart: ItemCart[]
    AddItemInCart: (coffee: ItemCart) => void,
    ChangeQuantity: (id: string, quantity: number) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({children}: CartProviderProps){
    const [cart, setCart] = useState<ItemCart[]>([])  
    
    function ChangeQuantity(id: string, quantity: number){
        const Item = produce(cart, draft => {
            const index = cart.findIndex(item => item.id === id);
            draft[index].quantity += quantity;
        })
        setCart(Item)
    }

    function AddItemInCart(coffee: ItemCart) {
      const coffeeExistInCart = cart.find(item => item.id === coffee.id)
      if(coffeeExistInCart){
            const Item = produce(cart, draft => {
                const index = cart.findIndex(item => item.id === coffee.id);
                draft[index].quantity = coffee.quantity;
            })
            setCart(Item)
      }else{
            const newItem = produce(cart, draft=> {
                draft.push(coffee)
            })
            setCart(newItem)
      }
    }
    
    return(
       <CartContext.Provider value={{ AddItemInCart, cart, ChangeQuantity}}>
            {children}
       </CartContext.Provider>

    )
}