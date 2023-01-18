import { useEffect, useState } from "react";
// import { Aside } from "../components/Aside"
// import { Bar } from "../components/Bar"
// import { Line } from "../components/Line"
// import { Numbers } from "../components/Numbers"
import { PieChart } from "../components/Pie/PieChart";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const [data, setData] = useState({});

  useEffect(() => {}, []);

  return (
    <div className="dashboard">
      <div className="top">
        <div className="top-left">
          <PieChart />
        </div>
        <div className="top-right">
          <PieChart />
        </div>
      </div>
      <div className="bottom">
        <div className="bot-left">
          <PieChart />
        </div>
        <div className="bot-mid">
          <PieChart />
        </div>
        <div className="bot-right">
          <PieChart />
        </div>
      </div>
    </div>
  );
}
