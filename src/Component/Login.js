import { useState } from "react";
import AccountService from "../Service/AccountService";
import { useNavigate } from 'react-router-dom';
function Login() {

    let [customer, setCustomer] = useState({
            "customerEmail":'',
            "customerPassword":''
    });



    const handleAccountChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });

    }
    
    const Navigate=useNavigate();
   
    const handleSubmit = (e) => {
        
        e.preventDefault();
        // console.log(customer);
        AccountService.loginAccount(customer)
            .then(
                (resp) => {
                    localStorage.setItem("customer",JSON.stringify(resp));
                    console.log(resp.data);
                    Navigate("/customer/Home")
                }
            )
            .catch(
                (err) => {
                    console.log(err.response.data);
                    alert(err.response.data)
                }
            )
        }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Login</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="customerEmail" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="customerEmail"
                                        name="customerEmail"
                                        placeholder="Enter your email"
                                        value={customer.customerEmail} onChange={handleAccountChange} required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="customerPassword" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="customerPassword"
                                        name="customerPassword"
                                        placeholder="Enter your password"
                                        value={customer.customerPassword} onChange={handleAccountChange} required
                                    />
                                </div>
                                <br />
                                <br />
                                <div className="text-center">
                                    <button type="submit" className="btn btn-info">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Login; 
