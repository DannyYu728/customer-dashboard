import {useEffect, useState}from 'react';
import { Aside } from "../components/Aside"
import { Bar } from "../components/Bar"
import { Line } from "../components/Line"
import { Numbers } from "../components/Numbers"
import { Pie } from "../components/Pie"

export interface IAppProps {
}

export default function App(props: IAppProps) {
  const [data, setData] = useState({})
  
  useEffect(() => {
    
  },[])

  return (
    <div>
      <Aside />
      <Bar />
      <Line />
      <Numbers />
      <Pie />
    </div>
  );
}







