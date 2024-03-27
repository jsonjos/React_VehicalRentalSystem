import { useState } from "react";
import AccountService from "../Service/AccountService";
import { useNavigate } from 'react-router-dom';
function Payment() {

    let [payment, setPayment] = useState({
            "bookingId":'',
            "noOfDays": '',
            "customerAccountId":''
    });



    const handleAccountChange = (e) => {
        setPayment({ ...payment, [e.target.name]: e.target.value });

    }
    
    const Navigate=useNavigate();
   
    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(payment);
        AccountService.payment(payment)
            .then(
                (resp) => {
                    console.log(data);
                    Navigate("/customer/Home")
                    
                }
            )
            .catch(
                (err) => {
                    console.log(err.response.data);
                }
            )
        }
    //     return (
    //     <>
    //         <div class="container1" style={{marginTop:'1%', marginLeft:'35%'}}>
    //         <h3>Login Account:</h3>
    //         </div>
    //         <div style={{marginLeft:'20%'}}>
    //         <form onSubmit={handleSubmit}>
    //             <p>
    //                 Email: <input type="email" name="customerEmail" value={customer.customerEmail} onChange={handleAccountChange} required></input>
    //             </p>
    //             <p>
    //             Password: <input type="password" name="customerPassword" value={customer.customerPassword} onChange={handleAccountChange} required></input>
    //             </p>
    //             <button type="submit">Login</button>
    //         </form>
    //         </div>
    //     </>
    //     "bookingId":'',
    //"noOfDays": '',
    //"customerAccountId":''
    // );
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Payment</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="bookingId" className="form-label">Booking Id</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="bookingId"
                                        name="bookingId"
                                        placeholder="Enter your Booking Id"
                                        value={payment.bookingId} onChange={handleAccountChange} required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="noOfDays" className="form-label">No Of Days</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="noOfDays"
                                        name="noOfDays"
                                        placeholder="Enter No Of Days"
                                        value={payment.noOfDays} onChange={handleAccountChange} required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="customerAccountId" className="form-label">customerAccountId</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="customerAccountId"
                                        name="customerAccountId"
                                        placeholder="Enter Customer Account Id"
                                        value={payment.customerAccountId} onChange={handleAccountChange} required
                                    />
                                </div>
                                <br />
                                <br />
                                <div className="text-center">
                                    <button type="submit" className="btn btn-info">Pay</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }

export default Payment; 
