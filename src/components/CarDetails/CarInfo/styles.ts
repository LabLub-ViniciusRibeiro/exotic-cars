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

    & > header > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & > header > img {
        width: 170px;
    }

    & > div > div {
        line-height: 30px;
    }

    h3 {
        font-weight: 300;
        font-size: 1.4rem;
        color: ${Colors.titleText};
        text-align: center;
    }
    
    h2 {
        font-weight: 700;
        font-size: 2rem;
        text-align: center;
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

    & > div > button {
        width: 100%;
    }

    & > div > button > a {
        font-weight: 300;
    }

    @media screen and (min-width: 600px) {

        & > header {
        flex-direction: row;
        align-self: flex-start;
    }

    & > header > div {
        align-items: flex-start;
    }

    & > div {
        padding: 30px 0;
        flex-direction: row;
    }

    & > div > button {
        width: 30%;
    }

    & > div > div {
        align-self: baseline;
    }
    }

    @media screen and (min-width: 900px) {
        & > div > img {
        width: 60%
    }
        & > div {
           padding: 20px 6% 20px 30px;
           justify-content: space-around;
        }

        & > div > button {
            min-width: 180px;
            width: 15%;
        }
    }
`
export default CarInfoContainer