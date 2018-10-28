import React from 'react'

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