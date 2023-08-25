import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

export const CarList = () => {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.cars.carList);
    const carBrand = useSelector(state => state.cars.searchTerm);
    const filteredCars = cars.filter(car => car.name.toLowerCase().includes(carBrand.toLowerCase()));

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id))
    }
    const renderedCars = filteredCars.map(car => {
        return (
            <div key={car.id} className="panel">
                <p>{car.name} - ${car.cost}</p>
                <button
                    className="button is-danger"
                    onClick={() => handleCarDelete(car)}
                >
                    Delete
                </button>
            </div>
        );
    })
    return (
        <div className="car-list">
            {renderedCars}
            <hr></hr>
        </div>
    );
}