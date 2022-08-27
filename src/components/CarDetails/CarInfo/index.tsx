import ferrariPicture from '@Assets/ferrari.png'
import { Link, useParams } from 'react-router-dom'
import CarInfoContainer from "./styles"
import CARS_DATA from '../../../../CARS_DATA.json';
import carPicture from '@Assets/ferrari_PNG10674.png'
import Button from '@Components/UI/Button';
import Colors from '@Shared/Colors';
import { ArrowLeft } from 'phosphor-react'

function CarInfo() {
    const params = useParams();
    const car = CARS_DATA.cars.find(car => car.id === parseInt(params.id as string));
    return (
        <CarInfoContainer>
            <header>
                <img src={ferrariPicture} />
                <h1>{car?.brand} {car?.model}</h1>
                <h3>${car?.rent_price}/day</h3>
            </header>
            <div>
                <Button
                    hasBorder={true}
                    style={{
                        borderRadius: '20px', border: `1px solid ${Colors.titleText}`,
                        color: Colors.titleText, padding: '10px', height: '40px', width: '100%'
                    }}>
                    <ArrowLeft color={Colors.titleText} size={24} />
                    <Link to='/'>Back to catalog</Link>
                </Button>
                <img src={carPicture} />
            </div>
        </CarInfoContainer>
    )
}

export default CarInfo