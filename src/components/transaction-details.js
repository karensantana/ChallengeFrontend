import React from 'react';
import ReactDOM from 'react-dom';


const TransactionDetails =() => {
        return(
            <div className="transaction-box">
                <h4 className="heading-margin">Let's set up your transaction!</h4>
                <p className="p-margin-bottom">Specify the amount to be sent or received.</p>
                    <form className="tr-form">
                      <div className="transaction-form">
                        <div className="field-box">
                          <div className="field-wrapper">
                            <label className="field-label  absolute-left absolute-top">You send </label>
                            <div className="flex-box">
                              <input type="text" id="send-input" className="form-input">
                              </input>
                              <div className="select-control">
                                <img className="flag-img" src="https://app.currencyfair.com/img/country_flags/united_kingdom_uk_flag.png" alt="UK currency" />
                                </div>
                            </div>

                        </div>
                      </div>
                      <div className="field-box recipient-box">
                        <div className="field-wrapper">
                          <label className="field-label absolute-left absolute-top">Recipient Gets </label>
                          <div className="flex-box">
                              <input type="text" id="receive-input" className="form-input">
                              </input>
                              <div className="select-control">
                                <img className="flag-img" src="https://app.currencyfair.com/img/country_flags/united_kingdom_uk_flag.png" alt="UK currency" />
                                </div>
                            </div>

                          </div>
                      </div>
                    </div>

                    </form>
                    <div className="saving-send justified">
                      <a className=" btn btn-send">Next </a>
                    </div>
           </div>
        );

}
export default TransactionDetails;
