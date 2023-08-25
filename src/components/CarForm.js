import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeName } from "../store";

export const CarForm = () => {
    const dispatch = useDispatch();
    const { name, cost } = useSelector(state => {
        return { name: state.form.name, cost: state.form.cost }
    });

    const handleNameChange = (event) => {
        dispatch(changeName(event.currentTarget.value));
    }
    const handleCostChange = (event) => {
        const carCost = parseInt(event.currentTarget.value);
        dispatch(changeCost(carCost));
    }
    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form>
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
            </form>
        </div>
    );
}