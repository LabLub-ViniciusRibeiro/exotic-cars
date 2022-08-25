import styled, { CSSProperties } from "styled-components";
import Colors from "../../../shared/constants/Colors";

interface Props {
    hasBorder: boolean,
    style?: CSSProperties
}
const ButtonContainer = styled.button<Props>`
    color: ${Colors.accent};
    border-radius: 10px;
    cursor: pointer;
    border: ${props => props.hasBorder ? `2px solid ${Colors.accent}` : 'none'};
    height: 34px;
    min-width: 76px;
    font-size: 0.9rem;
    font-weight: 700;
    background: transparent;
`

export default ButtonContainer;