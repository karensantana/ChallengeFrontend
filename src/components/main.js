import React from 'react';
import ReactDOM from 'react-dom';
import Summary from './summary';
import TransactionDetails from './transaction-details';
import WizardForm from './WizardForm'
import StepOne from './steps/StepOne';


const Main =() => {
    return (
    <section className="main">
        <div className="outter-block">
            <div className="inner-block">
                <div className="three-fifths">
                    <div className="column-wrapper pad-col-left">
                        <div className="card-box box left-box">
                            <WizardForm />
                                
                                    
                        </div>
                    </div>
                </div>
                <div className="two-fifths">
                    <Summary stepone={StepOne}/>
                </div>
            </div>
        </div>
    </section>
    );

}
export default Main;