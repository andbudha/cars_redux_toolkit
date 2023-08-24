import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./slices/carsSlice";
import { formReducer } from "./slices/formSlice";
import { changeSearchTerm, addCar, removeCar } from "./slices/carsSlice";
import { changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export { store, changeSearchTerm, addCar, removeCar, changeName, changeCost }