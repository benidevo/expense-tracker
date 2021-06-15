import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    return (
        <div className="chart">
            {props.data.map(element => <ChartBar value="element.value" maxValue={null} label={element.label} key={element.label} />)}
        </div>
    )
};

export default Chart;