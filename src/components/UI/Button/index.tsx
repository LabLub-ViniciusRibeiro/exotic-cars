import { CSSProperties, ReactNode } from "react"
import ButtonContainer from "./styles"

interface Props {
    hasBorder: boolean,
    style?: CSSProperties,
    children: ReactNode
}

function Button({ children, hasBorder, style }: Props) {
    return (
        <ButtonContainer hasBorder={hasBorder} style={style}>
            {children}
        </ButtonContainer>
    )
}

export default Button