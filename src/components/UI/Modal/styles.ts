import styled from "styled-components";

const ModalContainer = styled.div`
    width: 95vw;
    height: 95vh;
    box-sizing: content-box;
    background: transparent;
    position: absolute;

    .date {
        position: absolute;
        left: 40vw;
        top: 50px;
        z-index: 100;
    }
`

export default ModalContainer;