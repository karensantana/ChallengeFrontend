import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import validate from './validate';
import renderSelectField from '../renderSelectField';
import renderField from '../renderField';
import formatCurrency from '../formatCurrency';
import {currencies} from '../currencies'


let StepOne = (props) => {
  const { handleSubmit } = props
  return (
    <form className="tr-form" onSubmit={handleSubmit}>
      <div className="transaction-form">
        <div className="field-box">
          <div className="field-wrapper">
            <label className="field-label  absolute-left absolute-top">You send </label>
            <div className="flex-box">
              <Field 
                name="tosend" 
                type="number" 
                component={renderField} 
                label="You send" 
                className="form-input"
                />
              <div className="select-control">
                <figure className="flag-image">
                  <img src="/src/images/us_united_states_america_flag.png" alt="United States Flag"></img>
                </figure>
                <Field name="senderCurrency" id="senderCurrency" component={renderSelectField} options= {currencies}>
                  <option value={currencies[0].currency}>{currencies[0].currency}</option>
                  <option value={currencies[1].currency}>{currencies[1].currency}</option>
                  <option value={currencies[2].currency}>{currencies[2].currency}</option>
                  <option value={currencies[3].currency}>{currencies[3].currency}</option>
                </Field>
              </div>
            </div>

        </div>
      </div>
      <div className="field-box recipient-box">
        <div className="field-wrapper">
          <label className="field-label absolute-left absolute-top">Recipient Gets </label>
          <div className="flex-box">
            <Field 
                  name="toreceive" 
                  type="number" 
                  component={renderField} 
                  label="Recipientgets" 
                  className="form-input"
                  
                  />
            <div className="select-control">
              <figure className="flag-image">
                  <img src="/src/images/europe_flag.png" alt="United States Flag"></img>
              </figure>
              <Field name="receiverCurrency" component="select">
                  <option value={currencies[0].currency}>{currencies[0].currency}</option>
                  <option value={currencies[1].currency}>{currencies[1].currency}</option>
                  <option value={currencies[2].currency}>{currencies[2].currency}</option>
                  <option value={currencies[3].currency}>{currencies[3].currency}</option>
              </Field>
            </div>
            </div>

          </div>
      </div>
    </div>
    <div className="saving-send justified">
      <a className=" btn btn-send">Next </a>
    </div>
  </form>
  ) 
}

export default reduxForm({
  form: 'StepOne',     // a unique identifier for this form
 
})(StepOne)
