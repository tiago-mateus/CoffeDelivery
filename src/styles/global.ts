import { createGlobalStyle } from "styled-components"
import { defaultTheme } from '../../src/styles/themes/default'
export type ThemeColors = keyof typeof defaultTheme;

export const GlobalStyles = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    body{
        /* background-color: ${props => props.theme['background']}; */
        color: ${props => props.theme['base-title']}
    }

    body, input, textarea, button{
        font: 400 1rem Roboto, sans-serif;
    }
`