import Colors from "@Shared/Colors";
import styled from "styled-components";

const CartItemContainer = styled.li`
    padding: 20px 14px;
    background: ${Colors.carItemBackground};
    border-radius: 10px;
    color: ${Colors.titleText};
    cursor: pointer;
    transition: all 1s;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    header > p {
        font-weight: 700;
        color: ${Colors.iconColor};
        font-size: 1.5rem;
    }

    & > h3 {
        font-weight: 300;
        font-size: 1rem;
    }

    & > img {
        margin-top: 30px;
        width: 100%;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: right;
    }
    
    div > h4 {
        font-size: 1rem;
        position: relative;
        bottom: 6px;
    }

    div > h3 {
        font-size: 1rem;
        position: relative;
        top: 6px;
        font-weight: 300;
    }

    &:hover {
        position: relative;
        bottom: 5px;
        right: 5px;
        box-shadow: 2px 2px 10px ${Colors.accent};
    }

    &:active {
        position: relative;
        top: 5px;
        left: 5px;
        background: linear-gradient(315deg, #cacaca, ${Colors.carItemBackground});
        box-shadow:  none;
    }
`

export default CartItemContainer;