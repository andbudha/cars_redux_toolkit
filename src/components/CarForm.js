import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

export const CarForm = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.form.name)
    console.log(name);
    const handleNameChange = (event) => {
        dispatch(changeName(event.currentTarget.value));
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
                </div>
            </form>
        </div>
    );
}