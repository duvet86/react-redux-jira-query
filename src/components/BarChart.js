import React, { PropTypes } from "react";
import { Bar } from "react-chartjs-2";

const options = {
  scales: {
    xAxes: [
      {
        stacked: true
      }
    ],
    yAxes: [
      {
        stacked: true
      }
    ]
  },
  legend: { display: true },
  maintainAspectRatio: false
};

const BarChart = ({ data }) => {
  const labels = Object.keys(data).map(key =>
    new Date(Number(key)).toDateString());

  let obj = {
    blockers: {
      total: [],
      backgroundColor: "rgb(255, 0, 0)",
      hoverBackgroundColor: "rgb(255, 0, 0)"
    },
    criticals: {
      total: [],
      backgroundColor: "rgba(225, 58, 55, 0.7)",
      hoverBackgroundColor: "rgba(225, 58, 55, 0.7)"
    },
    majors: {
      total: [],
      backgroundColor: "rgba(255,99,132,0.2)",
      hoverBackgroundColor: "rgba(255,99,132,0.4)"
    },
    minors: {
      total: [],
      backgroundColor: "rgb(255, 255, 0)",
      hoverBackgroundColor: "rgb(255, 255, 0)"
    },
    trivials: {
      total: [],
      backgroundColor: "rgba(55, 160, 225, 0.7)",
      hoverBackgroundColor: "rgba(55, 160, 225, 0.7)"
    }
  };

  Object.keys(data).forEach(key =>
    Object.keys(data[key]).forEach(k =>
      obj[k]["total"].push(data[key][k].total)));

  const datasets = Object.keys(obj).map(k => ({
    label: k,
    data: obj[k]["total"],
    backgroundColor: obj[k]["backgroundColor"],
    hoverBackgroundColor: obj[k]["backgroundColor"],
    hoverBorderWidth: 2,
    hoverBorderColor: "lightgrey"
  }));

  const chartData = {
    labels: labels,
    datasets: datasets
  };

  return (
    <div>
      <h2>Bugs</h2>
      <Bar data={chartData} width={100} height={50} options={options} />
    </div>
  );
};

BarChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default BarChart;
