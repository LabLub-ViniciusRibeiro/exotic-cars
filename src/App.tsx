import { GridList, Header } from '@Components/index'
import './App.css'
import CARS_DATA from '../CARS_DATA.json';
import CarItem from '@Components/CarItem.tsx';
import Car from '@Shared/interfaces/Cart';

function App() {

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

export default App
