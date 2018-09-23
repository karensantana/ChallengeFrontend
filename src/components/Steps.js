import React from 'react'

getClassState = () =>{
    let styles = []
    for (let i = 0; i < length; i++) {
      if (i < index) {
        styles.push('done')
      } else if (i === indx) {
        styles.push('current')
      } else {
        styles.push('pending')
      }
    }
    return { current: indx, styles: styles }
  }




export default class ThreeSteps extends React.Component {
    state = {
        
        navState: getClassState(0, this.props.steps.length)
      }
 
  
  getClassName = (className, i) => {
    return className + '-' + this.state.getClassState.styles[i]
  }

  renderSteps = () => {
    return this.props.steps.map((s, i) => (
      <li
        className={this.getClassName('stepstate', i)}
        onClick={this.handleOnClick}
        key={i}
        value={i}
      >
        <em>{i + 1}</em>
        <span>{this.props.steps[i].name}</span>
      </li>
    ))
  }

  render () {
    return (
        <div>
        <ol className='threesteps'>
          {this.renderSteps()}
        </ol>
    
     </div>
    )
  }
}

