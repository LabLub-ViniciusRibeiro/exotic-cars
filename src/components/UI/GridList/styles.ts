import styled from "styled-components";

const GridListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 3fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
    padding: 20px 10px;
    
    @media screen and (min-width: 625px){
        padding: 10px 20px;
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media screen and (min-width: 1100px){
        padding: 20px 80px;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 30px;
    }
`

export default GridListContainer;