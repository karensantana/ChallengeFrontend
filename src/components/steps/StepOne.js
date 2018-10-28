import React,{ Component} from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import renderSelectField from '../renderSelectField';
import renderField from '../renderField';
import formatAmount from '../formatters/formatAmount';
import normalizeCurrencyValue from '../normalizers/normalizeCurrencyValue';
import {currencies} from '../currencies'
import {changeAmountToSend, changeAmountToReceive, changeCurrencyToSend, changeCurrencyToReceive} from '../../actions/index'
import { change } from 'redux-form';
import currencyAPISimulator from '../currencyAPISimulator';


class StepOne extends Component {
  constructor(props){
    super(props);
    this.onAmountToSendChange = this.onAmountToSendChange.bind(this);
  }
  
  
  onAmountToSendChange(toSendValue){
     //Here we simulate app is conecting to currency exchange API
    var scValue = currencyAPISimulator(this.props.senderCurrency);
    var rcValue = currencyAPISimulator(this.props.receiverCurrency);
    var calResult = (toSendValue * scValue * rcValue );
    return calResult; 
  }
  
  onAmountToReceiveChange() {
    console.log("Amount to receive changed");
  }

  onSenderCurrencyChange(){
    console.log("Sender currency Changed");
  }

  onReceiverCurrencyChange(){
    console.log("Receiver currency Changed");

  }

render() {
  
  const { senderCurrency, receiverCurrency, change} = this.props
  return (
    <form className="tr-form">
      <div className="transaction-form">
        <div className="field-box">
          <div className="field-wrapper">
            <label className="field-label  absolute-left absolute-top">You send </label>
            <div className="flex-box">
              <Field 
                name="amountToSend" 
                type="text" 
                component={renderField} 
                label="You send" 
                className="form-input"
                onChange={(event, newValue, previousValue) => {
                  var calResult = this.onAmountToSendChange(newValue);
                  change('amountToReceive', calResult)
                }}
                  
                />
              <div className="select-control">
              <figure className="flag-image">
                <img src={`/src/images/${senderCurrency}.png`}></img>
              </figure>
                <Field name="senderCurrency" id="senderCurrency" component={renderSelectField} options= {currencies} onChange={this.onSenderCurrencyChange}>
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
                  name="amountToReceive" 
                  type="text" 
                  component={renderField} 
                  label="Recipientgets" 
                  className="form-input"
                  onChange = {this.onAmountToReceiveChange}
                 
                  
                  />
            <div className="select-control">
              <figure className="flag-image">
              <img src={`/src/images/${receiverCurrency}.png`}></img>
              </figure>
              <Field name="receiverCurrency" component={renderSelectField} options= {currencies} onChange={this.onReceiverCurrencyChange}>
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
}

const mapStateToProps = state => ({
    amountToSend: formValueSelector("StepOne")(state, "amountToSend"),
    amountToReceive: formValueSelector("StepOne")(state, "amountToReceive"),
    senderCurrency: formValueSelector("StepOne")(state, "senderCurrency"),
    receiverCurrency: formValueSelector("StepOne")(state, "receiverCurrency")
   
})


StepOne = connect(
  mapStateToProps
)(StepOne)

export default reduxForm({
  form: 'StepOne', 
  fields: ['amountToSend', 'amountToReceive', 'senderCurrency', 'receiverCurrency'],
  initialValues: { senderCurrency: 'USD', receiverCurrency: 'EUR'} //Setting initial values
})(StepOne)


