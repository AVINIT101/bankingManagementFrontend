
import React, { useState } from 'react';

const EducationLoan = () => {
  const [formData, setFormData] = useState({
    loanType: '',
    loanAmount: '',
    loanApplyDate: '',
    rateOfIntrest: '',
    tenure: '',
    annualIncome: '',
    courseFee:'',
    course: '',
    fatherName: '',
    fatherOccupation: '',
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
    if (!formData.course.trim()) {
      errors.course = 'course is required';
    }
    if (!formData.courseFee.trim()) {
      errors.courseFee = 'courseFee is required';
    }
    if (!formData.fatherName.trim()) {
      errors.fatherName = 'fatherName is required';
    }
    if (!formData.fatherOccupation.trim()) {
      errors.fatherOccupation = 'fatherOccupation is required';
    }
    if (Object.keys(errors).length > 0) {
      // If there are validation errors, set them in the state
      setErrors(errors);
      return;
    }

    // Add registration logic here (e.g., send data to a backend)
    console.log('education loan Data:', formData);
  };

  return (
    <div style={{ backgroundColor: '#98FB98', height: '100vh' }}>
      <h2> Education Loan</h2>
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
    Course:
          <input
            type="text"
            name="Course"
            value={formData.Course}
            onChange={handleChange}
          />
        {errors.Course && <span style={{ color: 'red' }}>{errors.Course}</span>}

        </label>
        <br />
        <label>
    courseFee: '',
          <input
            type="number"
            name="courseFee"
            value={formData.courseFee}
            onChange={handleChange}
          />
          {errors.courseFee && <span style={{ color: 'red' }}>{errors.courseFee}</span>}

        </label>
        <br />
        <label>
    fatherName:
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
          />
        {errors.fatherName && <span style={{ color: 'red' }}>{errors.fatherName}</span>}
        </label>
        <br />
        <label>
        fatherOccupation:
          <input
            type="text"
            name="fatherOccupation"
            value={formData.fatherOccupation}
            onChange={handleChange}
          />
        {errors.fatherOccupation && <span style={{ color: 'red' }}>{errors.fatherOccupation}</span>}
        </label>
        <br />
        
        <button type="submit">apply</button>
      </form>
    </div>
  );
};

export default EducationLoan;
