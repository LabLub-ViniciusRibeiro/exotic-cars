import { useState } from "react"
import HeaderContainer, { SvgContainer } from "./styles"
import filter from '@Assets/filter.svg'
import { Input, InputGroup, Button } from "@Components/index";
import { Link } from "react-router-dom";

function Header() {

    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const breakpoint = 700;

    window.addEventListener('resize', () => {
        setScreenWidth(window.innerWidth)
    })

    return (
        <HeaderContainer>
            <Link to="/">
                <h1>EXOTIC</h1>
                <h2>cars</h2>
            </Link>
            {screenWidth < breakpoint ?
                <SvgContainer><img src={filter} className='filter-icon' /></SvgContainer>
                :
                <InputGroup>
                    <Input />
                    <Input />
                    <Input />
                </InputGroup>}
            <div>
                <Button title="Sign up" hasBorder={false} />
                <Button title="Sign in" hasBorder={true} />
            </div>
        </HeaderContainer>
    )
}

export default Header