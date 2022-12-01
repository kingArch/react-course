import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const arr = props.dataPoints.map(
        (datapoint) => datapoint.value
    );
    const totalMax = Math.max(...arr);
    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => {
                return <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                />
            })}
        </div>
    );
};

export default Chart;