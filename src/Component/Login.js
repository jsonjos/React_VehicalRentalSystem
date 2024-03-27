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
        console.log(customer);
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
                }
            )
        }
        return (
        <>
            <div class="container1" style={{marginTop:'1%', marginLeft:'35%'}}>
            <h3>Login Account:</h3>
            </div>
            <div style={{marginLeft:'20%'}}>
            <form onSubmit={handleSubmit}>
                <p>
                    Email: <input type="email" name="customerEmail" value={customer.customerEmail} onChange={handleAccountChange} required></input>
                </p>
                <p>
                Password: <input type="password" name="customerPassword" value={customer.customerPassword} onChange={handleAccountChange} required></input>
                </p>
                <button type="submit">Login</button>
            </form>
            </div>
        </>
    );

    }

export default Login; 
