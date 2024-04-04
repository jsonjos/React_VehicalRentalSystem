import AccountService from "../Service/AccountService";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

function DisplayVehicle({vehiclearray}){
    const navigate = useNavigate();

    const bookVehicle=(vehicleId)=>{
        const bookvehicle = {
            vehicleId: vehicleId
        };
        var customer =JSON.parse(localStorage.getItem("customer")|| "{}");
        const Id = customer.data.customerId
        // console.log(customer,bookvehicle);
        if (window.confirm("Are you sure you want to book")) {
        AccountService.bookVehicle(Id,bookvehicle)
        .then(
            (resp) => {
                localStorage.setItem("booking",JSON.stringify(resp));
                console.log(resp.data);
                navigate('/payment');
                
            }
        )
        .catch(
            (err) => {
                console.log(err.response.data);
            }
        )
        }
        
}

    return(
        <>
        <h3>DISPLAY AVAILABLE VEHICLES </h3>
    <table  className="table table-bordered">
        <thead>
      <tr>
        <th>VEHICLE ID</th>
        <th>MODEL NAME</th>
        <th>MODEL YEAR</th>
        <th>RENT</th>
        <th>OPTION</th>
      </tr>
        </thead>
        <tbody>
            {
                vehiclearray.map(
                    (vehicle) =>
                    (<tr key={vehicle.vehicleId}>
                                <td>{vehicle.vehicleId}</td>
                                <td>{vehicle.modelName}</td>
                                <td>{vehicle.modelYear}</td>
                                <td>{vehicle.rent}</td>
                                <td><button onClick={() => bookVehicle(vehicle.vehicleId)}>Book</button></td>
                    </tr>)
                        )
                    }
        </tbody>
    </table>
        </>

    )
}

function GetActiveVehicle() {
    let[vehicles,setvehicles]=useState([]);
    // useEffect(()=>{
    //     handleSubmit();
    // },[]);
    let [location, setlocation] = useState({
            "location":'Chennai'
    });
    const handleAccountChange = (e) => {
        setlocation({ ...location, [e.target.name]: e.target.value });
        console.log(location)
    }
    const handleSubmit = (e) => {
        console.log(location.location)
        e.preventDefault();
        AccountService.getActiveVehicles(location).then(
            (resp)=>{
                console.log(resp.data);
                setvehicles(resp.data);
                // Navigate('/customer/Home');
            }
        )
        .catch(
            (err)=>{
                console.log(err.response);
            }
        )
    }
        return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mt-5">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <select id="location"  name="location" onChange={handleAccountChange}  value={location.location} required>
                                        <option value="Chennai">Chennai</option>
                                        <option value="Coimbatore">Coimbatore</option>
                                        <option value="Bangalore">Bangalore</option>
                                    </select>
                                    {/* <div className="mb-3">
                                    <label htmlFor="location" className="form-label">Location:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="location"
                                        name="location"
                                        placeholder="Enter the location"
                                        value={location.location} onChange={handleAccountChange} required
                                    />
                                </div> */}
                                    <br></br>
                                    <hr></hr>
                                    <div className="text-center">
                                    <button type="submit" className="btn btn-info">Get</button>
                                </div>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {
                vehicles.length>0 ?<DisplayVehicle vehiclearray={vehicles}/>:<h5>No Active Vehicles found</h5>
            }
        </>
    );

    }
    

export default GetActiveVehicle; 
