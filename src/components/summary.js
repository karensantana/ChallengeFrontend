import React from 'react';
import ReactDOM from 'react-dom';


const Summary =() => {
    return(
       
            <div className="column-wrapper pad-col-right summary-box"> 
                <div className="info-box">
                    <h4 className="details-header">Sending Details</h4>
                </div>
                <div className="info-box info-box-middle white-box">
                        <h4 className="summary-info">You send</h4>
                    </div>
                <div className="info-box info-box-middle">
                    <h4 className="details-header">Receiving Details</h4>
                </div>
                <div className="receiving-details info-box-middle white-box side-border">
                    <h4 className="sumary-info">Rate</h4>
                </div>
                <div className="receiving-details info-box-middle white-box side-border">
                    <h4 className="sumary-info">Fee</h4>
                </div>
                <div className="receiving-details info-box-middle white-box side-border">
                    <h4 className="sumary-info">Delivery date</h4>
                </div>
                <div className="receiving-details info-box-middle white-box side-border">
                    <h4 className="sumary-info">Recipient gets</h4>
                </div>
                <div className="info-box">
                    <h4 className="saving-info">You save compared to your bank!</h4>
                </div>
         </div>
        
    );
}
export default Summary;
