import React, {Fragment} from 'react';

function Button ({add, clear, save, inputValue,change }) {
    const addMe = (number) => {
        add(number);
    };

    const clearCount = () => {
        clear();
    };

    const saveValue = () => {
        save();
    }
    const changeInput = (event) => {
        change(event);
    };

        return (
            <Fragment>
                <div>
                    <input type="number"  value={inputValue} onChange={changeInput.bind(null)} />
                    <button type="button" className="btn btn-primary" onClick={saveValue}> Save</button>
                    <button type="button" className="btn btn-secondary" onClick={addMe.bind(null,1)}> Add 1</button>
                    <button type="button" className="btn btn-success" onClick={addMe.bind(null,-1)}> Dec -1</button>
                    <button type="button" className="btn btn-danger" onClick={addMe.bind(null,100)}> Add 100</button>
                    <button type="button" className="btn btn-warning" onClick={addMe.bind(null,-100)}> Dec -100</button>
                    <button type="button" className="btn btn-info" onClick={clearCount}> Clear</button>

                </div>
            </Fragment>
        );
    }


export default Button;