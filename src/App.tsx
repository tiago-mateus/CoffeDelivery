import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyles } from "./styles/global"
import { CartProvider } from "./contexts/CartContext"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"

function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyles/>
        <CartProvider>
          <Router/>
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
