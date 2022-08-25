import { ReactNode } from "react"
import InputGroupContainer from "./styles"

interface Props {
    children: ReactNode
}

function InputGroup({ children }: Props) {
    return (
        <InputGroupContainer>
            {children}
        </InputGroupContainer>
    )
}

export default InputGroup