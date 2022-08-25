import styled from "styled-components";
import Colors from "@Shared/Colors";

const InputContainer = styled.div`
    & > input {
        background: transparent;
    }

    & > input:focus {
        outline: 1px solid ${Colors.accent};
    }
`

export default InputContainer;