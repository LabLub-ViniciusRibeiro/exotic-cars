import { InputHTMLAttributes } from "react"
import InputContainer from "./styles"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    icon: string
}

function Input({ icon, ...rest }: Props) {
    return (
        <InputContainer>
            <img src={icon} />
            <input {...rest} />
        </InputContainer>
    )
}

export default Input