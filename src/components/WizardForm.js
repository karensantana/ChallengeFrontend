import React, { Component } from 'react'
import PropTypes from 'prop-types';
import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';

class WizardForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
    this.steps = 
    [
      {name: 'Transaction info', component: <StepOne/>},
      {name: 'Recipient info', component: <StepTwo/>},
      {name: 'Make payment', component: <StepThree/>}
     
    ]
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  getClassName (className,i) {
    if (i> this.state.page)
        return className + " " + "todo";
    else
        return className + " " + "doing";
    }

  renderSteps () {
    return this.steps.map((s, i) => (
      <li
        className={this.getClassName('stepstate', i+1)}
        key={i}
        value={i}
      >
        <div className="step-container">
            <div className="step-wrapper">
                <h4 className={this.getClassName('steps', i+1)}>Step {i + 1}</h4>
                <span>{this.steps[i].name}</span>
            </div>

        </div>
      </li>
    ))
  }
  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
        
        <div>
            <ol className='threesteps'>
                {this.renderSteps()}
            </ol>
            <div className="transaction-box">
                <h4 className="heading-margin">Let's set up your transaction!</h4>
                <p className="p-margin-bottom">Specify the amount to be sent or received.</p>
                {page === 1 && <StepOne onSubmit={this.nextPage}/>}
                {page === 2 && <StepTwo previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                {page === 3 && <StepThree previousPage={this.previousPage} onSubmit={onSubmit}/>}
            </div>
            <div className="legal-info">
              <h5 className="copyright">©{(new Date()).getFullYear()} CurrencyFair </h5>
              <span className="legal-stuff"><a href="https://www.currencyfair.com/trust/trust-legal-stuff/" target="_blank">Legal Stuff</a></span>
              <span className="legal-stuff"><a href="https://support.currencyfair.com/s/?language=en" target="_blank">Help and Support</a></span>
            </div>
        </div>
    )
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default WizardForm