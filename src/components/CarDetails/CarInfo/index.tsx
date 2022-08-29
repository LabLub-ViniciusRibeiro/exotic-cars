import ferrariPicture from '@Assets/ferrari.png'
import { Link } from 'react-router-dom'
import CarInfoContainer from "./styles"
import Button from '@Components/UI/Button';
import Colors from '@Shared/Colors';
import { ArrowLeft } from 'phosphor-react'
import { capitalizeFirstLetter } from 'shared/helpers/capitalizeFirstLetter';
import Car from 'shared/interfaces/Car';
import red from '@Assets/california-details-red.png'
import silver from '@Assets/california-details-silver.png'
import yellow from '@Assets/california-details-yellow.png'

interface Props {
    car: Car
    index: number
}

const images = [yellow, red, silver];

function CarInfo({ car, index }: Props) {

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
                <div className='car-img-container'>
                    <img src={images[index]} />
                </div>
                <div>
                    <h2>0{index + 1}</h2>
                    <h3>{capitalizeFirstLetter(car.color)}</h3>
                </div>
            </div>
        </CarInfoContainer>
    )
}

export default CarInfo