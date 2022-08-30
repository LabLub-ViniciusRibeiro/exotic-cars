import { ReactNode } from "react"
import InputGroupContainer from "./styles"

interface Props {
    children: ReactNode,
    direction: 'row' | 'column'
}

function InputGroup({ children, direction }: Props) {
    return (
        <InputGroupContainer direction={direction}>
            {children}
        </InputGroupContainer>
    )
}

export default InputGroup