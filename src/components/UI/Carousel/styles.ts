import Colors from "@Shared/Colors";
import styled from "styled-components";

interface Props {
    left: number,
}

const CarouselContainer = styled.div<Props>`
    width: 100%;
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div {
        display: flex;
        align-items: center;
        overflow: hidden;
        gap: 30px;
        width: 100%;
    }

    & > div > div > img {
        width: 100%;        
    }

    & > div > div {
        position: relative;
        left: ${props => `${props.left}px`};
        transition: all ease-in-out 0.5s;
    }

    svg {
        cursor: pointer;
        transition: all 0.5s;
        color: ${Colors.titleText};
        border-radius: 10px;
    }

    svg:hover {
        background: ${Colors.titleText};
        color: #ffff;
    }

    .active {
        transform: scale(1.6);
        z-index: 100;
    }

    @media screen and (min-width: 900px) {
        & > div {
        gap: 50px;
    }
    }
`

export default CarouselContainer;