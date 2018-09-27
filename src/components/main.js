import React from 'react';
import ReactDOM from 'react-dom';
import Summary from './summary';
import ThreeSteps from './Steps';
import {steps} from './steps/index_steps';
import TransactionDetails from './transaction-details';


const Main =() => {
    return (
    <section className="main">
        <div className="outter-block">
            <div className="inner-block">
                <div className="three-fifths">
                    <div className="column-wrapper pad-col-left">
                        <div className="card-box box left-box">
                            <ThreeSteps steps= {steps} />
                                
                                    
                        </div>
                    </div>
                </div>
                <div className="two-fifths">
                    <Summary />
                </div>
            </div>
        </div>
    </section>
    );

}
export default Main;