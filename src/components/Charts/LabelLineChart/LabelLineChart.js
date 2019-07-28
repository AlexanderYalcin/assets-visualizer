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
  Legend,
  ResponsiveContainer
} from 'recharts';

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
          fontSize={15}
          transform="rotate(-17)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class LabelLineChart extends PureComponent {
  render() {
    let results = [];

    for (let result in this.props.fetchedResults) {
      results.push({
        name: this.props.fetchedResults[result].date,
        SEK: Number.parseInt(this.props.fetchedResults[result].amount)
      });
    }

    return (
      <div className={classes.Chart}>
        {this.props.fetchedResults.length > 0 ? (
          <ResponsiveContainer  height={300}>
            <LineChart
              data={results}
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
                dataKey="SEK"
                stroke="#8884d8"
                label={<CustomizedLabel />}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          ''
        )}
      </div>
    );
  }
}
