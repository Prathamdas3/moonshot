'use client'
import BarCharts from './BarChart'
import { useState } from "react";
import LineCharts from './LineChart';
import { ReturnType } from '@/server';


export default  function Dashboard({data}:{data:ReturnType}){
    const [isOpen,setIsOpen]=useState<boolean>(false)
    const [currentValue,setCurrentValue]=useState<string>('')
    const data2=data.total.hasOwnProperty(currentValue)?data.total[currentValue]:null
    console.log(data2!==null&&data2.data)
    
    return (<>
 <BarCharts data={data.summary}  setIsOpen={setIsOpen} setCurrentState={setCurrentValue}/>
 <LineCharts isOpen={isOpen} data={data2!==null&&data2.data}/>
 </>)
};