import React, { Component } from 'react';

const displayDrivers = payload.map((driver, idx) => {
    return (
        <div>
        </div>
    )
})

class Racing extends Component {
    render() {
        return (
            <div>
                <h1>Racing</h1>
                <div>
                    <h1>{driver.name}</h1>
                    <p>{driver.team}</p>
                </div>
                {displayDrivers}
            </div>
        );
    }
}

export default Racing;