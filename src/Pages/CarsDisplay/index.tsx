import { GridList, Header } from '@Components/index'
import CARS_DATA from '../../../CARS_DATA.json';
import CarItem from '@Components/CarItem.tsx';
import Car from 'shared/interfaces/Cart';
function CarsDisplay() {
    return (
        <>
            <Header />
            <GridList
                data={CARS_DATA.cars as Car[]}
                keyExtractor={item => item.id}
                renderItem={item => <CarItem car={item} />} />
        </>
    )
}

export default CarsDisplay