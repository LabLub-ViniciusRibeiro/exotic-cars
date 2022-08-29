import styled, { CSSProperties } from "styled-components";
import Colors from "@Shared/Colors";

interface Props {
    hasBorder?: boolean,
    style?: CSSProperties
}
const ButtonContainer = styled.button<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;
    color: ${Colors.accent};
    border-radius: 10px;
    cursor: pointer;
    border: ${props => props.hasBorder ? `2px solid ${Colors.accent}` : 'none'};
    height: 34px;
    min-width: 76px;
    font-size: 0.9rem;
    font-weight: 700;
    background: transparent;
    transition: all 0.5s;

    &:hover {
        transform: scale(1.01);
    }
`

export default ButtonContainer;