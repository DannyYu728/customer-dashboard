import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./PieChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

// Name, Category, Date, Price //
// Spending per Month
// Spending per Category

const data = {
  labels: [
    "Hardware",
    "Electronic",
    "Food",
    "Fashion",
    "Entertainment",
    "Travel",
  ],
  datasets: [
    {
      label: "Total Spent",
      color: "red",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      hoverBackgroundColor: "rgba(255, 140, 0 ,0.9)",
      hoverBorderColor: "white",
      borderWidth: 1,
    },
  ],
};

let options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: "white",
        font: {
          size: 12,
        },
      },
    },
  },
};

export function PieChart() {
  return (
    <div className="pieChart">
      <Pie data={data} options={options} />
    </div>
  );
}
