'use client'
import { Line, LineChart, XAxis, YAxis, CartesianGrid,  ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ColumnDataType } from "@/server";


export default  function LineCharts({data,isOpen}:{data:ColumnDataType[],isOpen:boolean}){
  console.log(data)
return (
    <Card className={`${isOpen?'w-full':'hidden'} max-w-3xl`}>
    <CardHeader>
      <CardTitle>Date-Number Line Chart</CardTitle>
      <CardDescription>Displaying numeric values over time</CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer
        config={{
          value: {
            label: "Value",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="h-[400px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(value) => { console.log(new Date(value).toLocaleDateString()); return new Date(value).toLocaleDateString()}}
            />
            <YAxis />
            <ChartTooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <ChartTooltipContent>
                      <div className="text-sm font-medium text-muted-foreground">
                        {new Date(payload[0].payload.date).toLocaleDateString()}
                      </div>
                      <div className="text-lg font-bold">
                        {payload[0].value}
                      </div>
                    </ChartTooltipContent>
                  )
                }
                return null
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="var(--color-value)"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </CardContent>
  </Card>
);
}; 