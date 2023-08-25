import { useDispatch, useSelector } from "react-redux";

export const CarValue = () => {
    const dispatch = useDispatch();
    const carList = useSelector(state => state.cars.carList);
    const carBrand = useSelector(state => state.cars.searchTerm);
    const filteredCarList = carList.filter(car => car.name.toLowerCase().includes(carBrand.toLowerCase()));
    const totalCost = filteredCarList.reduce((acc, car) => acc + car.cost, 0);
    return (
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    );
}