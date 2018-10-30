import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';



let Summary =(props) => {
    return(
       
            <div className="column-wrapper pad-col-right summary-box"> 
                <div className="info-box">
                    <h4 className="details-header">Sending Details</h4>
                </div>
                <div className="info-box info-box-middle white-box">
                        <h4 className="summary-info">You send</h4>
                        <span className="summary-amounts"> {(props.amountToReceive >0) && props.amountToSend}</span>
                    </div>
                <div className="info-box info-box-middle">
                    <h4 className="details-header">Receiving Details</h4>
                    { (props.amountToReceive >0) && props.amountToReceive &&<span className="summary-links">As of right now </span> }
                </div>
                <div className="receiving-details info-box-middle white-box side-border">
                    <h4 className="summary-info">Rate</h4>
                    { (props.amountToReceive >0) && props.amountToReceive &&<span className="exchange-details">{(props.amountToReceive / props.amountToSend).toFixed(2)}</span> }
                </div>
                <div className="receiving-details info-box-middle white-box side-border">
                    <h4 className="summary-info">Fee</h4>
                    { (props.amountToReceive >0) && props.amountToReceive &&<span className="exchange-details">2.5</span> }
                </div>
                <div className="receiving-details info-box-middle white-box side-border">
                    <h4 className="summary-info">Delivery date</h4>
                    { (props.amountToReceive >0) && props.amountToReceive &&<span className="exchange-details">25th November</span> }
                </div>
                <div className="receiving-details info-box-middle white-box side-border">
                    <h4 className="summary-info">Recipient gets</h4>
                    { (props.amountToReceive >0) && props.amountToReceive &&<span className="summary-amounts">{props.amountToReceive}</span> }
                    
                </div>
                <div className="info-box">
                    <h4 className="saving-info">You save compared to your bank!</h4>
                </div>
         </div>
        
    );
}
const mapStateToProps = state => ({
    amountToSend: formValueSelector("StepOne")(state, "amountToSend"),
    amountToReceive: formValueSelector("StepOne")(state, "amountToReceive")
  })

Summary = connect(
    mapStateToProps
  )(Summary)

export default Summary;
