import ButtonContainer from "@Components/UI/Button/styles";
import Colors from "@Shared/Colors";
import styled from "styled-components";

const CarInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & > header > img {
        width: 170px;
    }

    & > header > h3 {
        font-weight: 300;
        font-size: 1.6rem;
    }

    & > div {
        width: 100%;
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    & > div > img {
        width: 80%
    }
`
export default CarInfoContainer