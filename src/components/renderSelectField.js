import React from 'react'

/* const renderSelectField = ({ input, className, type, meta: { touched, error } }) => (
    <div className="input-wrapper">
      <input {...input} placeholder= "0.00" type={type} className={className}/>
      {touched && error && <span>{error}</span>}
    </div>
) */
const renderSelectField = ({ input, options, disabled }) => (
  <div>
    <select {...input} disabled={disabled}>
      { options.map(option =>
        <option key={option.currency} value={option.currency}>
          {option.currency}
          
        </option>
      )}
    </select>
  </div>
);
export default renderSelectField