import { ReactNode } from "react";
import { IconContainer } from "./styles";
import { ThemeColors } from "../../../styles/global";

interface ItemsProps {
    texto?: string,
    children: ReactNode,
    iconBgColor: ThemeColors
}

export function Items({texto, children, iconBgColor}:ItemsProps){
    return(
        <section>
            <IconContainer variant={iconBgColor}>{children}</IconContainer>
            <span>{texto}</span>
        </section>
    )
}