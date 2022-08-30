import styled from "styled-components";
import Colors from "@Shared/Colors";

interface Props {
    direction: 'column' | 'row'
}

const InputGroupContainer = styled.div<Props>`
    background: ${Colors.inputBackground};
    height: ${props => props.direction==='row' ? '40px' : '100px'};
    border-radius: 20px;
    opacity: 59%;
    display: flex;
    flex-direction: ${props => props.direction};
    align-items: center;
    width: ${props => props.direction==='row' ? '60%' : '100%'};
    position: relative;
    justify-content: ${props => props.direction==='row' ? 'space-around' : 'center'};
    padding: 5px 5px 5px 10px;
    gap: ${props => props.direction==='row' ? 'inherit' : '5px'};
    min-width: ${props => props.direction==='row' ? '530px' : 'auto'};

    input {
        background: ${props => props.direction==='row' ? 'transparent' : 'white'}!important;
        height: ${props => props.direction==='row' ? 'inherit' : '30px'};
        opacity: ${props => props.direction==='row' ? 'inherit' : '1'};
    }
`

export default InputGroupContainer;