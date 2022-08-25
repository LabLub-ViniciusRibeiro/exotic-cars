import styled from "styled-components";
import Colors from "../../shared/constants/Colors";

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 10px 30px #D8D7D7;
    width: 100%;
    box-sizing: content-box;
    padding: 10px 16px;
    box-sizing: border-box;

    & > div {
        display: flex;
        align-items: center;
    }

    & > div h1 {
        font-size: 1.6rem;
        font-weight: 600;
        margin-right: 4px;
    }
    & > div h2 {
        font-weight: 400;
    }

    img {
        width: 100%;
        filter: invert(79%) sepia(1%) saturate(225%) hue-rotate(40deg) brightness(97%) contrast(102%);
        transition: all 0.2s;
    }
`

export const SvgContainer = styled.div`
    background: ${Colors.inputBackground};
    padding: 5px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover .filter-icon{
        filter: invert(56%) sepia(15%) saturate(1779%) hue-rotate(196deg) brightness(97%) contrast(97%);
    }
`

export default HeaderContainer;