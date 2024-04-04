import AccountService from "../Service/AccountService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function DeactivateAccount(){
    let [customerDetails, setCustomer] = useState({
        "customerPassword":''
    });
    const handleAccountChange = (e) => {
        setCustomer({ ...customerDetails, [e.target.name]: e.target.value });
    }
    const Navigate=useNavigate();
    const handleSubmit = (e) => {
        var customer =JSON.parse(localStorage.getItem("customer")|| "{}");
        const Id = customer.data.customerId
        console.log(Id)
        console.log(customerDetails.customerPassword)
        e.preventDefault();
        AccountService.deactivateAccount(Id,customerDetails).then(
            (resp)=>{
                console.log(resp.data);
                localStorage.clear();
                Navigate('/login');
            }
        )
        .catch(
            (err)=>{
                console.log(err.response);
            }
        )
    }
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mt-5">
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                <h5 className="card-title text-center">DeActivate your Account</h5>
                                <br></br>
                                <div className="mb-3">
                                    <label htmlFor="customerPassword" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="customerPassword"
                                            name="customerPassword"
                                            placeholder="Enter your password"
                                            value={customerDetails.customerPassword} 
                                            onChange={handleAccountChange} 
                                            required
                                        />
                                </div>
                                <br />
                                <br />
                                <div className="text-center">
                                    <button type="submit" className="btn btn-info">Deactivate</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DeactivateAccount;