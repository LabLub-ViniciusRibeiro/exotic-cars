import styled from "styled-components";
import Colors from "@Shared/Colors";

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 10px 30px #D8D7D7;
    width: 100%;
    box-sizing: content-box;
    padding: 10px;
    box-sizing: border-box;
    
    & > a {
        display: flex;
        align-items: center;
    }
    
    & > a h1 {
        font-size: 1.6rem;
        font-weight: 600;
        margin-right: 4px;
        color: ${Colors.titleText};
    }
    & > a h2 {
        font-weight: 400;
        color: ${Colors.titleText};
    }

    img {
        width: 100%;
        filter: invert(79%) sepia(1%) saturate(225%) hue-rotate(40deg) brightness(97%) contrast(102%);
        transition: all 0.2s;
    }

    & > div {
        display: flex;
    }

    @media screen and (min-width: 700px) {
        padding: 20px 10px;
    }

    @media screen and (min-width: 1100px) {
        padding: 20px 80px;
    }
`

export const SvgContainer = styled.div<{isActive: boolean}>`
    background: ${Colors.inputBackground};
    padding: 5px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    .filter-icon {
        filter: ${props => props.isActive && 
        'invert(56%) sepia(15%) saturate(1779%) hue-rotate(196deg) brightness(97%) contrast(97%)'};
    }
    
    &:hover .filter-icon{
        filter: invert(56%) sepia(15%) saturate(1779%) hue-rotate(196deg) brightness(97%) contrast(97%);
    }
`

export default HeaderContainer;