import styled from "styled-components";
import Colors from "@Shared/Colors";

const InputContainer = styled.div`

    padding-left: 10px;
    display: flex;
    align-items: center;

    & > input {
        background: transparent;
        border-radius: 5px;
        color: ${Colors.inputText};
        font-weight: 600;
    }

    & > input:focus {
        outline: 1px solid ${Colors.accent};
    }

    img {
        width: 12px;
        margin-right: 5px;
    }

    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}
`

export default InputContainer;