import Car from "@Shared/interfaces/Cart"

interface Props {
    car: Car
}
function CarItem({ car }: Props) {
    return (
        <li>
            <h4>{car.brand}</h4>
            <h3>{car.model}</h3>
            <p>IMAGE PLACEHOLDER</p>
            <h2>{car.rent_price}</h2>
        </li>
    )
}

export default CarItem