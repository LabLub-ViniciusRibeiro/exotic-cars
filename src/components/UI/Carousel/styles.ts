import Colors from "@Shared/Colors";
import styled from "styled-components";

interface Props {
    left: number,
}

const CarouselContainer = styled.div<Props>`
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div {
        display: flex;
        align-items: center;
        overflow: hidden;
        gap: 50px;
        width: 100%;
        height: 200px;
    }

    & > div > div > img {
        width: 120%;        
    }

    & > div > div {
        position: relative;
        border-radius: 10px;
        left: ${props => `${props.left}px`};
        transition: all ease-in-out 0.5s;
        background: ${Colors.iconColor};
        cursor: pointer;
        width: 80px;
        height: 80px;
        overflow: visible;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    svg {
        cursor: pointer;
        transition: all 0.5s;
        color: ${Colors.titleText};
        border-radius: 50%;
    }

    svg:hover {
        background: ${Colors.titleText};
        color: #ffff;
    }
    
    .active {
        transform: scale(1.6);
        z-index: 100;
        background: linear-gradient(90deg, rgba(123, 137, 244, 0.8), rgba(123, 137, 244, 0.2));
        padding-left: 10px;
    }

    @media screen and (min-width: 600px) {
        & > div > div {
        width: 100px;
        height: 100px;
    }
    }
    @media screen and (min-width: 900px) {

        padding: 10px 40px;

        & > div {
        gap: 80px;
    }

    & > div > div {
        width: 110px;
        height: 110px;
    }
    }
`

export default CarouselContainer;