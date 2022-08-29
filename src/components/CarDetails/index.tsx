import Colors from "@Shared/Colors"
import { ArrowRight } from "phosphor-react"
import { Link } from "react-router-dom"
import { Button } from ".."
import CarInfo from "./CarInfo"
import CarDetailsContainer from "./styles"

function CarDetails() {
    return (
        <CarDetailsContainer>
            <CarInfo />
            <Button
                style={{
                    borderRadius: '20px', background: Colors.titleText,
                    color: 'white', padding: '10px', height: '40px', fontWeight: 300,
                    width: '160px', alignSelf: 'center', margin: '20px 0'
                }}>
                <Link to=''>Book now</Link>
                <ArrowRight color={'white'} size={24} weight='thin' />
            </Button>
        </CarDetailsContainer>
    )
}

export default CarDetails