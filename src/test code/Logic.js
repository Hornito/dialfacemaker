import React from 'react';

const userType = 2;
const result = "This is the answer is "

function Logic() {
    return (
    <div>
        <h2>logic test</h2>
   

        {(() => {
            if (userType == 1) {
              return (
                <div>variable = 1</div>
              )
            } else if (userType == 2) {
              return (
                <div>
                    {result}variable = 2
                    </div>
              )
            } else {
              return (
                <div>variable = 3</div>
              )
            }
        })()}
   
    </div>
  );
}
   
export default Logic;