import { useState } from "react";
import AccountService from "../Service/AccountService";
import { useNavigate } from 'react-router-dom';
function Register() {

    let [customer, setCustomer] = useState({
            "customerName":'',
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
        AccountService.addAccount(customer)
            .then(
                (resp) => {
                    console.log(resp.data);
                    
                    Navigate('/login');
                    
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
            <div class="container1" style={{marginTop:'10%', marginLeft:'35%'}}>
            <h3>Add new Account:</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <p>
                    Name: <input type="text" name="customerName" value={customer.customerName} onChange={handleAccountChange} required></input>
                </p>

                <p>
                    Email: <input type="email" name="customerEmail" value={customer.customerEmail} onChange={handleAccountChange} required></input>
                </p>
                <p>
                password: <input type="text" name="customerPassword" value={customer.customerPassword} onChange={handleAccountChange} required></input>
                </p>
                <button type="submit">Add Account</button>
            </form>
        </>
    );

    }

export default Register; 
