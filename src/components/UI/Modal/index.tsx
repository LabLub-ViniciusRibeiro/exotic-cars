import { ReactNode } from "react"
import ModalContainer from "./styles"

interface Props {
    children: ReactNode,
    onHide: React.MouseEventHandler<HTMLDivElement> | undefined,
    left: string,
    top: string
}

function Modal({ children, onHide, left, top }: Props) {
    return (
        <ModalContainer onClick={onHide} className='modal' left={left} top={top}>
            {children}
        </ModalContainer>
    )
}

export default Modal