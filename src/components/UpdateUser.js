import React, { useState } from 'react';

const UpdateUser = () => {
  const [formData, setFormData] = useState({
    deposite: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add UpdateUser logic here (e.g., send data to a backend)
    console.log('UpdateUser Data:', formData);
  };

  return (
    <div style={{ backgroundColor: '#98FB98', height: '100vh' }}>
      <h2>Update</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Deposite:
          <input type="number" name="Deposite" value={formData.Deposite} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          address:
          <input type="text" name="address" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};


export default UpdateUser;
