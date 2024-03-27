import AccountService from "../Service/AccountService";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

function DisplayVehicle({vehiclearray}){
    const navigate = useNavigate();

    const bookVehicle=(customerId,vehicleId)=>{
        var customer =JSON.parse(localStorage.getItem("customer")|| "{}");
        const bookvehicle = {
            customerId: customer.data.id,
            vehicleId: vehicleId
        };
        console.log(customer,bookvehicle);
        if (window.confirm("Are you sure you want to book")) {
        AccountService.bookVehicle(customer.customerId)
        .then(
            (resp) => {
                console.log(resp.data);
                navigate('/customer/Home');
                
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
    useEffect(()=>{
        handleSubmit();
    },[]);
    let [location, setlocation] = useState({
            "location":'Chennai'
    });
    const handleAccountChange = (e) => {
        setlocation({ ...location, [e.target.name]: e.target.value });

    }
    const handleSubmit = (e) => {
        console.log(location);
        AccountService.getActiveVehicles(location)
            .then(
                (resp) => {
                    console.log(resp);
                    setvehicles(resp.data);
                    
                }
            )
            .catch(
                (err) => {
                    console.log(err.response);
                    // window.alert(err.response.data);
                }
            )
        }
        return (
        <>
        
            <h3>Select location:</h3>
            <form onSubmit={handleSubmit} >
                
                <select id="location" name="location" onChange={handleAccountChange}  value={location.location} required>
                                <option value="Chennai">Chennai</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Bangalore">Bangalore</option>
                </select>
                <br></br>
                <hr></hr>
                <button type="submit" >Get</button>
            </form>
            {
                vehicles.length>0 ?<DisplayVehicle vehiclearray={vehicles}/>:<h3>No Active Vehicles found</h3>
            }
        </>
    );

    }
    

export default GetActiveVehicle; 
