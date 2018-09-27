import React from 'react';
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'
import { StepThree } from './StepThree'


const steps = 
    [
      {name: 'Transaction info', component: <StepOne/>},
      {name: 'Recipient info', component: <StepTwo/>},
      {name: 'Make payment', component: <StepThree/>}
     
    ]

export { steps }