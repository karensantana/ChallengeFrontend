import React from 'react';
import ReactDOM from 'react-dom';
import Summary from './summary';
import TransactionDetails from './transaction-details';


const Main =() => {
    return (
    <section className="main">
        <div className="outter-block">
            <div className="inner-block">
            
              <TransactionDetails />
              <Summary />
            </div>
        </div>
    </section>
    );

}
export default Main;