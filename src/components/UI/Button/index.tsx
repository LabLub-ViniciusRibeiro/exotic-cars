import { CSSProperties } from "react"
import ButtonContainer from "./styles"

interface Props {
    title: string,
    hasBorder: boolean,
    style?: CSSProperties
}

function Button({ title, hasBorder, style }: Props) {
    return (
        <ButtonContainer hasBorder={hasBorder} style={style}>
            {title}
        </ButtonContainer>
    )
}

export default Button