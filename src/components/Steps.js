import React from 'react'

export default class ThreeSteps extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        currentStep: 0,
          
        }
    }
    getClassName (className,i) {
        if (i> this.state.currentStep)
            return className + " " + "todo";
        else
            return className + " " + "doing";
         
    }

    renderSteps () {
    return this.props.steps.map((s, i) => (
      <li
        className={this.getClassName('stepstate', i)}
        key={i}
        value={i}
      >
        <div className="step-container">
            <div className="step-wrapper">
                <h4 className={this.getClassName('steps', i)}>Step {i + 1}</h4>
                <span>{this.props.steps[i].name}</span>
            </div>

        </div>
      </li>
    ))
  }

  render () {
    return (
        <div>
        <ol className='threesteps'>
          {this.renderSteps()}
        </ol>
        {this.props.steps[this.state.currentStep].component}
     </div>
    )
  }
}

