import Carousel from "@Components/UI/Carousel"
import Colors from "@Shared/Colors"
import { ArrowRight } from "phosphor-react"
import { Link, useParams } from "react-router-dom"
import { Button } from ".."
import CARS_DATA from '../../../CARS_DATA.json'
import CarInfo from "./CarInfo"
import CarDetailsContainer from "./styles"
import red from '@Assets/california-details-red.png'
import silver from '@Assets/california-details-silver.png'
import yellow from '@Assets/california-details-yellow.png'
import Car from "shared/interfaces/Car"
import { useState } from "react"

const images = [yellow, red, silver];

function CarDetails() {
    const params = useParams();
    const car = CARS_DATA.cars.find(car => car.id === parseInt(params.id as string));
    const cars = CARS_DATA.cars.filter(carItem => carItem.model === car?.model);
    const [imgIndex, setImgIndex] = useState<number>(0);

    return (
        <CarDetailsContainer>
            <CarInfo car={cars[imgIndex] as Car} index={imgIndex} />
            <Button
                style={{
                    borderRadius: '20px', background: Colors.titleText,
                    color: 'white', padding: '10px', height: '40px', fontWeight: 300,
                    width: '160px', alignSelf: 'center', margin: '20px 0'
                }}>
                <Link to=''>Book now</Link>
                <ArrowRight color={'white'} size={24} weight='thin' />
            </Button>
            <Carousel imgUrls={images} setImgIndex={setImgIndex} imgIndex={imgIndex} />
        </CarDetailsContainer>
    )
}

export default CarDetails