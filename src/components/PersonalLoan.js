
import React, { useState } from 'react';

const PersonalLoan = () => {
  const [formData, setFormData] = useState({
    loanType: '',
    loanAmount: '',
    loanApplyDate: '',
    rateOfIntrest: '',
    tenure: '',
    annualIncome: '',
    comapnyName:'',
    designation: '',
    experience: '',
    totalExperience: '',   
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
    const loanAmountRegex = /^[0-9]$/;

    const errors = {};
    
    if (!formData.loanType.trim()) {
      errors.loanType = 'Username is required';

    }
    if (!formData.loanAmount.trim()) {
      errors.loanAmount = 'loan amount is required';
    } else if (!loanAmountRegex.test(formData.loanAmount)) {
      errors.loanAmount = 'loan amount should contain only numbers';
    }
    if (!formData.loanApplyDate.trim()) {
      errors.loanApplyDate = 'loanApplyDate is required';
    }

    if (!formData.rateOfIntrest.trim()) {
      errors.rateOfIntrest = 'rateOfIntrest is required';
    }
    if (!formData.tenure.trim()) {
      errors.tenure = 'tenure is required';
    }
    if (!formData.annualIncome.trim()) {
      errors.annualIncome = 'annualIncome is required';
    }
    if (!formData.designation.trim()) {
      errors.designation = 'designation is required';
    }
    if (!formData.experience.trim()) {
      errors.experience = 'experience is required';
    }
    if (!formData.totalExperience.trim()) {
      errors.totalExperience = 'totalExperience is required';
    }
    if (Object.keys(errors).length > 0) {
      // If there are validation errors, set them in the state
      setErrors(errors);
      return;
    }

    // Add registration logic here (e.g., send data to a backend)
    console.log('personal loan Data:', formData);
  };

  return (
    <div style={{ backgroundColor: '#98FB98', height: '100vh' }}>
      <h2>Personal Loan</h2>
      <form onSubmit={handleSubmit}>
      <label>
      loanType:
          <input type="text" name="loanType" value={formData.loanType} onChange={handleChange} />
          {errors.loanType && <span style={{ color: 'red' }}>{errors.loanType}</span>}
        </label>
        <br />
        <label>
    loanAmount:
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
          />
          {errors.loanAmount && <span style={{ color: 'red' }}>{errors.loanAmount}</span>}
        </label>
        <br />
        <label>
    loanApplyDate:
          <input
            type="date"
            name="loanApplyDate"
            value={formData.loanApplyDate}
            onChange={handleChange}
          />
          {errors.loanApplyDate && <span style={{ color: 'red' }}>{errors.loanApplyDate}</span>}
        </label>
        <br />
        <label>
    rateOfIntrest:
          <input type="number" name="rateOfIntrest" value={formData.rateOfIntrest} onChange={handleChange} />
          {errors.rateOfIntrest && <span style={{ color: 'red' }}>{errors.rateOfIntrest}</span>}
        </label>
        <br />
        <label>
    tenure:
          <input
            type="number"
            name="tenure"
            value={formData.tenure}
            onChange={handleChange}
          />
        {errors.tenure && <span style={{ color: 'red' }}>{errors.tenure}</span>}

        </label>
        <br />
        <label>
    annualIncome:
          <input
            type="number"
            name="annualIncome"
            value={formData.annualIncome}
            onChange={handleChange}
          />
        {errors.annualIncome && <span style={{ color: 'red' }}>{errors.annualIncome}</span>}
        </label>
        <br />
        <label>
    companyName:
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        {errors.companyName && <span style={{ color: 'red' }}>{errors.companyName}</span>}

        </label>
        <br />
        <label>
    designation: '',
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          />
          {errors.designation && <span style={{ color: 'red' }}>{errors.designation}</span>}

        </label>
        <br />
        <label>
    experience:
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        {errors.experience && <span style={{ color: 'red' }}>{errors.accountType}</span>}
        </label>
        <br />
        <label>
        totalExperience:
          <input
            type="number"
            name="totalExperience"
            value={formData.totalExperience}
            onChange={handleChange}
          />
        {errors.totalExperience && <span style={{ color: 'red' }}>{errors.totalExperience}</span>}
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
        <button type="submit">apply</button>
      </form>
    </div>
  );
};

export default PersonalLoan;
