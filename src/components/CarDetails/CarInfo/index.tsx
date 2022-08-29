import ferrariPicture from '@Assets/ferrari.png'
import { Link, useParams } from 'react-router-dom'
import CarInfoContainer from "./styles"
import CARS_DATA from '../../../../CARS_DATA.json';
import carPicture from '@Assets/ferrari_PNG10674.png'
import Button from '@Components/UI/Button';
import Colors from '@Shared/Colors';
import { ArrowLeft } from 'phosphor-react'
import { capitalizeFirstLetter } from 'shared/helpers/capitalizeFirstLetter';

function CarInfo() {
    const params = useParams();
    const car = CARS_DATA.cars.find(car => car.id === parseInt(params.id as string));
    return (
        <CarInfoContainer>
            <header>
                <img src={ferrariPicture} />
                <div>
                    <h1>{car?.brand} {car?.model}</h1>
                    <h3>${car?.rent_price}/day</h3>
                </div>
            </header>
            <div>
                <Button
                    hasBorder={true}
                    style={{
                        borderRadius: '20px', border: `1px solid ${Colors.titleText}`,
                        color: Colors.titleText, padding: '10px', height: '40px'
                    }}>
                    <ArrowLeft color={Colors.titleText} size={24} weight='thin' />
                    <Link to='/'>Back to catalog</Link>
                </Button>
                <img src={carPicture} />
                <div>
                    <h2>01</h2>
                    <h3>{capitalizeFirstLetter(car?.color as string)}</h3>
                </div>
            </div>
        </CarInfoContainer>
    )
}

export default CarInfo