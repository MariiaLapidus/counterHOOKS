import React from 'react';

function Input ({inputValue, change, add}) {
    const onChange = (event) => {
        change(event);
    }

        return (
            <div>

                <input type="number"  value={inputValue}
                       onChange={onChange.bind(null)}/>
            </div>
        );

}

export default Input;