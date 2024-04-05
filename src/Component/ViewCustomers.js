import React, { useState, useEffect } from 'react';
import AdminService from '../Service/AdminService';

function ViewCustomers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetchAllCustomers();
    }, []);

    const fetchAllCustomers = () => {
        AdminService.getAllCustomers()
            .then((response) => {
                setCustomers(response.data);
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    }

    const handleDeleteCustomer = (customerId) => {
        AdminService.deleteCustomer(customerId)
            .then((resp) => {
                // Update the customer list after successful deletion
                console.log("Deletion successfull");
                console.log(resp);
                setCustomers(customers.filter(customer => customer.customerId !== customerId));
            })
            .catch((error) => {
                console.error('Error deleting customer', error);
            });
    }

    return (
        <div>
            {customers.length ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.customerId}>
                                <td>{customer.customerId}</td>
                                <td>{customer.customerName}</td>
                                <td>{customer.customerEmail}</td>
                                <td>{customer.customerPassword}</td>
                                <td>
                                    <button onClick={() => handleDeleteCustomer(customer.customerId)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No customers to display.</p>
            )}
        </div>
    );
}

export default ViewCustomers;
