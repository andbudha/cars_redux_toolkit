import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

export const CarForm = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.form.name);
    const cost = useSelector(state => state.form.cost);

    const handleNameChange = (event) => {
        dispatch(changeName(event.currentTarget.value));
    }
    const handleCostChange = (event) => {
        const carCost = parseInt(event.currentTarget.value);
        dispatch(changeCost(carCost));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({ name, cost }))
    }
    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input
                            className="innput is-expanded"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input
                            className="innput is-expanded"
                            value={cost || ''}
                            onChange={handleCostChange}
                            type="number"
                        />
                    </div>
                </div>
                <div className="field">
                    <button className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    );
}