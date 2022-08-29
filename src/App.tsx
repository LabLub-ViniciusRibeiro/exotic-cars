import './App.css'
import CarsDisplay from 'Pages/CarsDisplay';
import { Link, Route, Routes } from 'react-router-dom';
import Car from 'shared/interfaces/Car';
import { GridList } from './components';
import CarItem from '@Components/CarItem.tsx';
import CARS_DATA from '../CARS_DATA.json';
import CarDetails from '@Components/CarDetails';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<CarsDisplay />}>
          <Route index element={<GridList
            data={CARS_DATA.cars as Car[]}
            keyExtractor={item => item.id}
            renderItem={item => <Link to={`/car/${item.id}`}><CarItem car={item} /></Link>} />} />
          <Route path='/car/:id' element={<CarDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
