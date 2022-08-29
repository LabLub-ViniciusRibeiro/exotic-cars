import styled from "styled-components";

const CarDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 5px;
    
    @media screen and (min-width: 600px) {
        padding: 20px 10px;
    }

    @media screen and (min-width: 900px) {
        padding: 40px 50px;
}
`

export default CarDetailsContainer;