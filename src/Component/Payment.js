import { useState } from "react";
import AccountService from "../Service/AccountService";
import { useNavigate } from 'react-router-dom';
function Payment() {

    let [payment, setPayment] = useState({
            "noOfDays": '',
            "customerAccountId":''
    });



    const handleAccountChange = (e) => {
        setPayment({ ...payment, [e.target.name]: e.target.value });

    }
    
    const Navigate=useNavigate();
   
    const handleSubmit = (e) => {
        var booking =JSON.parse(localStorage.getItem("booking")|| "{}");
        const Id = booking.data.bookingId;
        e.preventDefault();
        console.log(payment);
        AccountService.payment(Id,payment)
            .then(
                (resp) => {
                    // console.log(resp.data);
                    localStorage.removeItem("booking");
                    Navigate("/customer/Home")
                    
                }
            )
            .catch(
                (err) => {
                    console.log(err.response.data);
                }
            )
        }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Payment</h5>
                            <form onSubmit={handleSubmit}>
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
