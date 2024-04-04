import { useState } from "react";
import AccountService from "../Service/AccountService";
import { useNavigate } from 'react-router-dom';
function ReturnVehicle(){
    let [vehicle, setvehicle] = useState({
        "vehicleId":'',
        "vehicleLocation":''
});



const handleAccountChange = (e) => {
    setvehicle({ ...vehicle, [e.target.name]: e.target.value });

}

const Navigate=useNavigate();

const handleSubmit = (e) => {
    
    e.preventDefault();
    // console.log(customer);
    AccountService.returnVehicle(vehicle)
        .then(
            (resp) => {
                console.log(resp.data);
                Navigate("/customer/Home")
            }
        )
        .catch(
            (err) => {
                console.log(err.response.data);
            }
        )
    }
    return(
    <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Return Vehicle</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="vehicleId" className="form-label">Vehicle Id</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="vehicleId"
                                        name="vehicleId"
                                        placeholder="Enter vehicle Id"
                                        value={vehicle.vehicleId} onChange={handleAccountChange} required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="vehicleLocation" className="form-label">Return Location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="vehicleLocation"
                                        name="vehicleLocation"
                                        placeholder="Enter return location"
                                        value={vehicle.vehicleLocation} onChange={handleAccountChange} required
                                    />
                                </div>
                                <br />
                                <br />
                                <div className="text-center">
                                    <button type="submit" className="btn btn-info">Return</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ReturnVehicle;