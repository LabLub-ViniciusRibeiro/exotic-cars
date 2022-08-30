import styled from "styled-components";

interface Props {
    left: string,
    top: string
}

const ModalContainer = styled.div<Props>`
    width: 95vw;
    height: 95vh;
    box-sizing: content-box;
    background: transparent;
    position: absolute;
    z-index: 30;

    .date {
        position: absolute;
        left: ${props => props.left};
        top: ${props => props.top};
        z-index: 100;
    }
`

export default ModalContainer;