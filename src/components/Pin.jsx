import React from 'react';
import { PinInput } from 'react-input-pin-code';
import { StatefulPinInput } from 'react-input-pin-code';


export const Pin = () => {
  const [values, setValues] = React.useState(['', '', '' , '']);

  return (

      <div>

            <h1>Set your Pin </h1>
          <div  className='maindiv'>
            <PinInput
              values={values}
             
              onChange={(value, index, values) => setValues(values)}
            />
          </div>

           
        </div>
  );
};


