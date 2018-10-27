import React from 'react'

const renderField = ({ input, className, type, meta: { touched, error } }) => (
    <div className="input-wrapper">
      <input {...input} placeholder= "0.00" type={type} className={className} />
      {touched && error && <span>{error}</span>}
    </div>
)

export default renderField