// Register.js
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    address: '',
    state: '',
    contact:'',
    dob: '',
    accountType: '',
    branch: '',
    deposite: '',
    idProof: '',
    idNumber: '',    
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear validation errors when the user starts typing
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const usernameRegex = /^[a-zA-Z]+$/;
    const nameRegex = /^[a-zA-Z]+$/;
    const numberRegex = /^[0-9]{10}$/;

    const errors = {};
    
    if (!formData.username.trim()) {
      errors.username = 'Username is required';

    } else if (!usernameRegex.test(formData.username)) {
      errors.username = 'Username should contain only alphabets';
    }
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (!nameRegex.test(formData.name)) {
      errors.name = 'Name should contain only alphabets';
    }
    if (!formData.contact.trim()) {
      errors.contact = 'contact is required';
    } else if (!numberRegex.test(formData.contact)) {
      errors.contact = 'contact should contain only number';
    }
    if (!formData.address.trim()) {
      errors.address = 'address is required';
    }
    if (!formData.password.trim()) {
      errors.password = 'password is required';
    }
    if (!formData.dob.trim()) {
      errors.dob = 'dob is required';
    }
    if (!formData.state.trim()) {
      errors.state = 'state is required';
    }
    if (!formData.accountType.trim()) {
      errors.accountType = 'accountType is required';
    }
    if (!formData.branch.trim()) {
      errors.branch = 'branch is required';
    }
    if (!formData.deposite.trim()) {
      errors.deposite = 'deposite is required';
    }
    if (!formData.idProof.trim()) {
      errors.idProof = 'idProof is required';
    }
    if (!formData.idNumber.trim()) {
      errors.idNumber = 'idNumber is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'email is required';
    }
    

    if (Object.keys(errors).length > 0) {
      // If there are validation errors, set them in the state
      setErrors(errors);
      return;
    }

    // Add registration logic here (e.g., send data to a backend)
    console.log('Registration Data:', formData);
  };

  return (
    <div style={{ backgroundColor: '#98FB98', height: '100vh' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
        </label>
        <br />
        <label>
          email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </label>
        <br />
        <label>
        address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}

        </label>
        <br />
        <label>
        state:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        {errors.state && <span style={{ color: 'red' }}>{errors.state}</span>}
        </label>
        <br />
        <label>
        contact:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        {errors.contact && <span style={{ color: 'red' }}>{errors.contact}</span>}

        </label>
        <br />
        <label>
        dob:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
                  {errors.dob && <span style={{ color: 'red' }}>{errors.dob}</span>}

        </label>
        <br />
        <label>
        accountType:
          <input
            type="text"
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
          />
        {errors.accountType && <span style={{ color: 'red' }}>{errors.accountType}</span>}
        </label>
        <br />
        <label>
        branch:
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          />
        {errors.branch && <span style={{ color: 'red' }}>{errors.branch}</span>}
        </label>
        <br />
        <label>
        deposite:
          <input
            type="number"
            name="deposite"
            value={formData.deposite}
            onChange={handleChange}
          />
        {errors.deposite && <span style={{ color: 'red' }}>{errors.deposite}</span>}
        </label>
        <br />
        <label>
        idProof:
          <input
            type="text"
            name="idProof"
            value={formData.idProof}
            onChange={handleChange}
          />
        {errors.idProof && <span style={{ color: 'red' }}>{errors.idProof}</span>}
        </label>
        <br />
        <label>
        idNumber:
          <input
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
          />
        {errors.idNumber && <span style={{ color: 'red' }}>{errors.idNumber}</span>}
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
