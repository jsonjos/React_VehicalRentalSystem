import AccountService from "../Service/AccountService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function LinkAccount(){
    let [customerAccount, setCustomer] = useState({
        "bankId":'',
        "bankPassword":''
    });
    const handleAccountChange = (e) => {
        setCustomer({ ...customerAccount, [e.target.name]: e.target.value });
    }
    const Navigate=useNavigate();
    const handleSubmit = (e) => {
        var customer =JSON.parse(localStorage.getItem("customer")|| "{}");
        const Id = customer.data.customerId
        console.log(Id)
        e.preventDefault();
        AccountService.linkAccount(Id,customerAccount).then(
            (resp)=>{
                console.log(resp.data);
                Navigate('/customer/Home');
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
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card mt-5">
                            <div class="card-body">
                                <form onSubmit={handleSubmit}>
                                <h5 className="card-title text-center">Link Bank Account</h5>
                                <br></br>
                                <div className="mb-3">
                                    <label htmlFor="bankId" className="form-label">Account Number</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="bankId"
                                            name="bankId"
                                            placeholder="Enter your account number"
                                            value={customerAccount.bankId} 
                                            onChange={handleAccountChange} 
                                            required
                                        />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="bankPassword" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="bankPassword"
                                            name="bankPassword"
                                            placeholder="Enter your password"
                                            value={customerAccount.bankPassword} 
                                            onChange={handleAccountChange} 
                                            required
                                        />
                                </div>
                                <br />
                                <br />
                                <div className="text-center">
                                    <button type="submit" className="btn btn-info">Link</button>
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
export default LinkAccount;