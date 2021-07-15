import React from 'react';

import './ChartBar.css';

const ChartBar = props => {
let barFillHeight = '0%';

    if (props.maxValue > 0) {
    let val = Math.round((props.value / props.maxValue) * 100)
    barFillHeight = `${val}%`
}

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" 
                style={{ height: barFillHeight }}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
};

export default ChartBar;