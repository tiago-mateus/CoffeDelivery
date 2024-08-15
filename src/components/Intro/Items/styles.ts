import styled from "styled-components";
import { ThemeColors } from "../../../styles/global";

interface IconContainerProps {
    variant: ThemeColors
}
export const IconContainer = styled.div<IconContainerProps>`
    padding: 0.5rem;
    border-radius: 100px;
    background-color: ${props => props.theme[props.variant]};
    display: flex;
    width: 1rem;
`;