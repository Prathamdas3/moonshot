"use client"

import { SetStateAction } from "react"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"




export default function Component({ data, setIsOpen,setCurrentState }: { data: { X: string, Y: number }[], setIsOpen: React.Dispatch<SetStateAction<boolean>> ,setCurrentState:React.Dispatch<SetStateAction<string>>}) {

const handle=(e)=>{
  setIsOpen(prev=>!prev)
  setCurrentState(e.activeLabel)
}

  return (
    <Card className={`w-full max-w-3xl`}>
      <CardHeader>
        <CardTitle>Feature Bar Chart</CardTitle>
        <CardDescription>Displaying values for features A through F</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            Y: {
              label: "Value",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} onClick={handle}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="X" />
              <YAxis />
              <ChartTooltip
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey="Y"
                fill="var(--color-Y)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}