
import { useState } from 'react';
import AdminService from '../Service/AdminService';


function AddCustomer() {
  // Your existing component code remains unchanged
  let [customer, setCustomer] = useState({
    "customerName":'',
    "customerEmail":'',
    "customerPassword":''
});

const handleAccountChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });

}



const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log(customer);
    AdminService.addCustomer(customer)
        .then(
            (resp) => {
                console.log(resp.data);
                alert('Added Customer Successfully');
                
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
    <h3>Add Customer:</h3>
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
        <button type="submit">Add Customer</button>
    </form>
</>
);
}

export default AddCustomer;
