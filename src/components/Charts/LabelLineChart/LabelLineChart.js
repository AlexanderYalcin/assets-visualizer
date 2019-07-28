/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import classes from './LabelLineChart.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const data = [
  {
    name: 'Page A',
    pv: 2400
  },
  {
    name: 'Page B',
    pv: 1398
  },
  {
    name: 'Page C',
    pv: 9800
  },
  {
    name: 'Page D',
    pv: 3908
  },
  {
    name: 'Page E',
    pv: 4800
  },
  {
    name: 'Page F',
    pv: 3800
  },
  {
    name: 'Page G',
    pv: 4300
  }
];

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class LabelLineChart extends PureComponent {
  render() {
    console.log(this.props.fetchedResults);
    
    return (
      <div className={classes.Chart} >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            label={<CustomizedLabel />}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    );
  }
}
