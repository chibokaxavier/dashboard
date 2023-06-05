"use client";
import React, { useState } from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  return (
    <>
      <div className="col-span-2 w-full relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Chart data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
