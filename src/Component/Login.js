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
                    console.log(resp.data);
                    
                    Navigate('/');
                    
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
            <h3>login Account:</h3>
            <form onSubmit={handleSubmit}>
                <p>
                    Email: <input type="email" name="customerEmail" value={customer.customerEmail} onChange={handleAccountChange} required></input>
                </p>
                <p>
                password: <input type="password" name="customerPassword" value={customer.customerPassword} onChange={handleAccountChange} required></input>
                </p>
                <button type="submit">login</button>
            </form>
        </>
    );

    }

export default Login; 
