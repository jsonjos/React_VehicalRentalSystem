import React, { useState } from 'react';
import AdminService from '../Service/AdminService'; 

const DeleteCustomerComponent = () => {
  const [customerId, setCustomerId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const deleteCustomer = (customerId) => {
    AdminService.deleteCustomer(customerId)
      .then(response => {
        setSuccessMessage(response.data || 'Customer deleted successfully');
        console.log(response.data);
        // Add navigation logic here if needed
      })
      .catch(error => {
        console.error('Error deleting customer:', error);
      });
  };

  return (
    <div>
        <h1>Delete Customer:</h1>
      <input
        type="number"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        placeholder="Enter Customer ID"
      />
      <button onClick={deleteCustomer}>Delete</button>
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
};

export default DeleteCustomerComponent;
