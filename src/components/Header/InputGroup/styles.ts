import styled from "styled-components";
import Colors from "@Shared/Colors";

const InputGroupContainer = styled.div`
    background: ${Colors.inputBackground};
    height: 40px;
    border-radius: 20px;
    opacity: 59%;
    display: flex;
    align-items: center;
    width: 60%;
    position: relative;
    justify-content: space-around;
    padding: 5px 5px 5px 10px;
    min-width: 530px;
`

export default InputGroupContainer;