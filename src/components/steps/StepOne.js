import React,{ Component} from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import renderSelectField from '../renderSelectField';
import renderField from '../renderField';
import {currencies} from '../currencies'
import {changeAmountToSend, changeAmountToReceive, changeCurrencyToSend, changeCurrencyToReceive} from '../../actions/index'
import { change } from 'redux-form';
import currencyAPISimulator from '../currencyAPISimulator';
import ReactModal from 'react-modal';


class StepOne extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    };

    this.onAmountToSendChange = this.onAmountToSendChange.bind(this);
    this.formatCurrencyValue = this.formatCurrencyValue.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
//Modal methods

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  getParent() {
    return document.querySelector('#app');
  }

  //Normalize before saving in the store
  normalizeCurrencyValue(value){
    if (!value) {
      return value;
    }
    var onlyNums = value.replace(/[^\d]/g, '');
    return onlyNums;
  }
  //Format Input Value
  formatCurrencyValue(value){
     console.log("received value to send format: "+ value);
     if (!value) {
         return value;
    }

    if(typeof value == 'number') {
      console.log("Type is number Formatted value"+ new Intl.NumberFormat('en-US', { style: 'currency', currency: this.props.receiverCurrency }).format(value));
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: this.props.receiverCurrency }).format(value);
    }
    var onlyNums = value.replace(/[^\d]/g, '');
    if(!onlyNums){
      return onlyNums;
    }

    return new Intl.NumberFormat('en-US', { style: 'currency', currency: this.props.senderCurrency }).format(parseFloat(onlyNums));
  }
  onAmountToSendChange(toSendValue){
    console.log(toSendValue);
     //Here we simulate app is conecting to currency exchange API
    var scValue = currencyAPISimulator(this.props.senderCurrency);
    var rcValue = currencyAPISimulator(this.props.receiverCurrency);
    
    if(!toSendValue){
      return 0.00;
    }

    var toSend = parseFloat(toSendValue).toFixed(2);
    var calResult = (toSend / scValue * rcValue ).toFixed(2);
    return calResult;
      
  }
  
  onAmountToReceiveChange(toReceiveValue) {
    var scValue = currencyAPISimulator(this.props.senderCurrency);
    var rcValue = currencyAPISimulator(this.props.receiverCurrency);

    if(!toReceiveValue){
      return 0.00;
    }
    var toReceive = parseFloat(toReceiveValue).toFixed(2);
    var calResult = (toReceive / rcValue * scValue ).toFixed(2);
    return calResult;

  }

  onSenderCurrencyChange(senderCurrencyValue){
    var scValue = currencyAPISimulator(senderCurrencyValue);
    var rcValue = currencyAPISimulator(this.props.receiverCurrency);
    var toSendValue = this.props.amountToSend;

    if(!toSendValue){
      return 0.00;
    }
    var calResult = ( toSendValue / scValue * rcValue ).toFixed(2);;
    return calResult;
     
  }

  onReceiverCurrencyChange(receiverCurrencyValue){
    var scValue = currencyAPISimulator(this.props.senderCurrency);
    var rcValue = currencyAPISimulator(receiverCurrencyValue);
    var toSendValue = this.props.amountToSend;
    
    if(!toSendValue){
      return 0.00;
    }
    var calResult = ( toSendValue / scValue * rcValue ).toFixed(2);
    return calResult;

  }

render() {
  
  const { amountToSend, amountToReceive, senderCurrency, receiverCurrency, change} = this.props
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
                normalize= {this.normalizeCurrencyValue}
                onChange={(event, newValue, previousValue) => {
                  var calResult = this.onAmountToSendChange(newValue);
                  change('amountToReceive', calResult)
                }}
                  
                />
              <div className="select-control">
              <figure className="flag-image">
                <img src={`/src/images/${senderCurrency}.png`}></img>
              </figure>
                <Field 
                name="senderCurrency" 
                id="senderCurrency" 
                component={renderSelectField} 
                options= {currencies} 
                onChange={(event, newValue, previousValue) => {
                  var calResult = this.onSenderCurrencyChange(newValue);
                  change('amountToReceive', calResult);
                  
                }}
                >
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
                  normalize= {this.normalizeCurrencyValue}
                  onChange={(event, newValue, previousValue) => {
                    var calResult = this.onAmountToReceiveChange(newValue);
                    change('amountToSend', calResult)
                  }}
                  
                  />
            <div className="select-control">
              <figure className="flag-image">
              <img src={`/src/images/${receiverCurrency}.png`}></img>
              </figure>
              <Field 
              name="receiverCurrency" 
              component={renderSelectField} 
              options= {currencies} 
              onChange={(event, newValue, previousValue) => {
                var calResult = this.onReceiverCurrencyChange(newValue);
                change('amountToReceive', calResult)
              }}>
              </Field>
            </div>
            </div>

          </div>
      </div>
    </div>
    <div className="saving-send justified">
    <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
           parentSelector={this.getParent}
           className="sec-code-modal"
           overlayClassName="code-modal-over"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={true}
        >
          <div id="code-modal-head">
              <h2 className="modal-heading">Identity verification Required</h2>
              <p>For your security, we ocassionally required you to verify your identity by entering a code sent to your mobile device.</p>
          </div>
          <div className="code-modal-body">
              <h2 className="code">Enter the code sent via SMS to</h2><div className="phone-sent"><div className="head"><span>809</span></div><div className="body"><span>4425278</span></div></div>
          </div>
          <div className="code-modal-footer">
          <button className="btn btn-disabled" onClick={this.handleCloseModal}>Verify Code</button>
          <button className="btn btn-back" onClick={this.handleCloseModal}>Back</button>
          </div> 
        </ReactModal>
      <a className="btn btn-send" onClick={this.handleOpenModal}>Next </a>
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


