import { Header } from '@Components/index'
import { Outlet } from 'react-router-dom';
function CarsDisplay() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default CarsDisplay