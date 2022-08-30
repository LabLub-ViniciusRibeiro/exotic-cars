import { ReactNode } from "react"
import ModalContainer from "./styles"

interface Props {
    children: ReactNode,
    onHide: React.MouseEventHandler<HTMLDivElement> | undefined
}

function Modal({ children, onHide }: Props) {
    return (
        <ModalContainer onClick={onHide} className='modal'>{children}</ModalContainer>
    )
}

export default Modal