import { useEffect, useState } from "react"
import Car from "shared/interfaces/Car"
import CartItemContainer from "./styles"
import picture from '../../assets/ferrari_PNG10674.png'

interface Props {
    car: Car
}
function CarItem({ car }: Props) {
    const [pic, setPic] = useState<any>();
    useEffect(() => {
        load();
        async function load() {
            const p = await import('../../assets/ferrari_PNG10674.png');
            setPic(p);
        }
    }, [])
    return (
        <CartItemContainer>
            <header>
                <h4>{car.brand}</h4>
                <p>...</p>
            </header>
            <h3>{car.model.toUpperCase()}</h3>
            <img src={picture} />
            <div>
                <h4>$</h4>
                <h2>{car.rent_price}</h2>
                <h3>/day</h3>
            </div>
        </CartItemContainer>
    )
}

export default CarItem