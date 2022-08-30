import { useState } from "react"
import ReactDOM from 'react-dom'
import HeaderContainer, { SvgContainer } from "./styles"
import filter from '@Assets/filter.svg'
import { Input, InputGroup, Button } from "@Components/index";
import { Link } from "react-router-dom";
import location from '@Assets/ph_map-pin-fill.svg'
import calendar from '@Assets/ion_calendar-sharp.svg'
import { DateRange, Range, RangeKeyDict } from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Modal from "@Components/UI/Modal";
import formatDate from "shared/helpers/formatDate";
import { MagnifyingGlass } from 'phosphor-react'

function Header() {

    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showInputGroup, setShowInputGroup] = useState<boolean>(false);
    const breakpoint = 860;
    const [date, setDate] = useState<Range[]>([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }])

    window.addEventListener('resize', () => {
        setScreenWidth(window.innerWidth)
    });

    function handleCloseModal(event: React.MouseEvent<HTMLDivElement>) {
        const target = event.target as HTMLElement;
        if (target.classList.contains('modal')) {
            setShowModal(false);
        }
    }

    function handleShowModal() {
        setShowModal(true);
    }

    function handleChangeRange(item: RangeKeyDict) {
        setDate([item.selection]);
    }

    function handleShowInputGroup() {
        setShowInputGroup(prev => !prev);
    }

    return (
        <>
            <HeaderContainer>
                <Link to="/">
                    <h1>EXOTIC</h1>
                    <h2>cars</h2>
                </Link>
                {screenWidth < breakpoint ?
                    <SvgContainer onClick={handleShowInputGroup} isActive={showInputGroup}>
                        <img src={filter} className='filter-icon' />
                    </SvgContainer>
                    :
                    <InputGroup direction="row">
                        <Input icon={location} type='text' />
                        <Input icon={calendar} type='date' onClick={handleShowModal}
                            value={formatDate(date[0].startDate as Date)} />
                        <Input icon={calendar} type='date' onClick={handleShowModal}
                            value={formatDate(date[0].endDate as Date)} />
                        {showModal && ReactDOM.createPortal(
                            <Modal onHide={handleCloseModal} left={'40vw'} top={'50px'}>
                                <DateRange
                                    ranges={date}
                                    editableDateInputs={true}
                                    onChange={handleChangeRange}
                                    moveRangeOnFirstSelection={false}
                                    className='date' />
                            </Modal>,
                            document.getElementById('modal') as HTMLElement)}
                        <Button style={{
                            background: 'white', borderRadius: '100%', width: '30px', height: '30px',
                            minWidth: '10px'
                        }}>
                            <MagnifyingGlass size={18} weight="bold" />
                        </Button>
                    </InputGroup>}
                <div>
                    <Button hasBorder={false}>
                        Sign up
                    </Button>
                    <Button hasBorder={true}>
                        Sign in
                    </Button>
                </div>
            </HeaderContainer>
            {showInputGroup &&
                <InputGroup direction="column">
                    <Input icon={location} type='text' />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Input icon={calendar} type='date' onClick={handleShowModal}
                            value={formatDate(date[0].startDate as Date)} />
                        <Input icon={calendar} type='date' onClick={handleShowModal}
                            value={formatDate(date[0].endDate as Date)} />
                    </div>
                    {showModal && ReactDOM.createPortal(
                        <Modal onHide={handleCloseModal} left={'7vw'} top={'150px'}>
                            <DateRange
                                ranges={date}
                                editableDateInputs={true}
                                onChange={handleChangeRange}
                                moveRangeOnFirstSelection={false}
                                className='date' />
                        </Modal>,
                        document.getElementById('modal') as HTMLElement)}
                    <Button style={{
                        background: 'white', borderRadius: '100%', width: '30px', height: '30px',
                        minWidth: '10px'
                    }}>
                        <MagnifyingGlass size={18} weight="bold" />
                    </Button>
                </InputGroup>
            }
        </>
    )
}

export default Header