"use client"

import { useState, useEffect } from "react"
import { Bar, BarChart, Line, LineChart, XAxis, YAxis, CartesianGrid,  ResponsiveContainer, Brush, ReferenceArea } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format, parse } from "date-fns"
// import Cookies from 'js-cookie'

// Mock API call - replace with actual API integration
const fetchData = async () => {
  // This would be replaced with an actual API call
  return [
    { Day: "4/10/2022", Age: "15-25", Gender: "Male", A: 4044, B: 3111, C: 9142, D: 672, E: 408, F: 2277 },
    { Day: "4/10/2022", Age: ">25", Gender: "Male", A: 2277, B: 1732, C: 98, D: 269, E: 273, F: 3324 },
    // ... more data ...
  ]
}

export default function Dashboard() {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [dateRange, setDateRange] = useState({ from: null, to: null })
  const [ageFilter, setAgeFilter] = useState("all")
  const [genderFilter, setGenderFilter] = useState("all")
  const [selectedFeature, setSelectedFeature] = useState(null)
  const [lineChartData, setLineChartData] = useState([])
  const [zoomState, setZoomState] = useState(null)

  // useEffect(() => {
  //   const loadData = async () => {
  //     const result = await fetchData()
  //     setData(result)
  //     setFilteredData(result)
  //   }
  //   loadData()

    // Load preferences from cookies
    // const savedDateRange = Cookies.get('dateRange')
    // const savedAgeFilter = Cookies.get('ageFilter')
    // const savedGenderFilter = Cookies.get('genderFilter')

  //   if (savedDateRange) setDateRange(JSON.parse(savedDateRange))
  //   if (savedAgeFilter) setAgeFilter(savedAgeFilter)
  //   if (savedGenderFilter) setGenderFilter(savedGenderFilter)
  // }, [])

  // useEffect(() => {
    // Apply filters
    // let filtered = data
    // if (dateRange.from && dateRange.to) {
      // filtered = filtered.filter(item => {
      //   // const itemDate = parse(item.Day, "d/M/yyyy", new Date())
      //   // return itemDate >= dateRange.from && itemDate <= dateRange.to
      // })
    }
    // if (ageFilter !== "all") {
    //   filtered = filtered.filter(item => item.Age === ageFilter)
    // }
    // if (genderFilter !== "all") {
    //   filtered = filtered.filter(item => item.Gender === genderFilter)
    // }
    // setFilteredData(filtered)

    // Save preferences to cookies
    // Cookies.set('dateRange', JSON.stringify(dateRange))
    // Cookies.set('ageFilter', ageFilter)
    // Cookies.set('genderFilter', genderFilter)
  // }, [data, dateRange, ageFilter, genderFilter])

  // const handleBarClick = (entry) => {
  //   setSelectedFeature(entry.name)
  //   setLineChartData(prepareLineChartData(filteredData, entry.name))
  //   setZoomState(null)
  // }

  // const resetFilters = () => {
  //   setDateRange({ from: null, to: null })
  //   setAgeFilter("all")
  //   setGenderFilter("all")
  //   // Cookies.remove('dateRange')
  //   // Cookies.remove('ageFilter')
  //   // Cookies.remove('genderFilter')
  // }

  // const aggregateData = (data) => {
  //   const features = ['A', 'B', 'C', 'D', 'E', 'F']
  //   return features.map(feature => ({
  //     name: feature,
  //     // total: data.reduce((sum, item) => sum + item[feature], 0)
  //   }))
  // }

  // const prepareLineChartData = (data, feature) => {
  //   return data.map(item => ({
  //     date: item.Day,
  //     value: item[feature]
  //   }))
  // }

  // const handleZoom = (state) => {
  //   if (!state) {
  //     setZoomState(null)
  //   } else {
  //     const { startIndex, endIndex } = state
  //     setZoomState({ startIndex, endIndex })
  //   }
  // }

  // const handleZoomOut = () => {
  //   setZoomState(null)
  // }

  return (
    <div className="p-6 space-y-6 bg-background">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <div className="flex space-x-4">
          <Select value={ageFilter} onValueChange={setAgeFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Age Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ages</SelectItem>
              <SelectItem value="15-25">15-25</SelectItem>
              <SelectItem value=">25">&gt;25</SelectItem>
            </SelectContent>
          </Select>
          <Select value={genderFilter} onValueChange={setGenderFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Gender Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genders</SelectItem>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
            </SelectContent>
          </Select>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[280px] justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(dateRange.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange.from}
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
          <Button onClick={resetFilters}>Reset Filters</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Feature Usage</CardTitle>
          <CardDescription>Total time spent on each feature</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              total: {
                label: "Total Time",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={aggregateData(filteredData)}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="total" fill="var(--color-total)" onClick={handleBarClick} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {selectedFeature && (
        <Card>
          <CardHeader>
            <CardTitle>Time Trend for Feature {selectedFeature}</CardTitle>
            <CardDescription>Daily usage over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: {
                  label: "Usage",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[400px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={lineChartData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(date) => format(parse(date, "d/M/yyyy", new Date()), "MMM dd")}
                    domain={['dataMin', 'dataMax']}
                  />
                  <YAxis />
                  <ChartTooltip
                    content={<ChartTooltipContent />}
                    labelFormatter={(date) => format(parse(date, "d/M/yyyy", new Date()), "MMM dd, yyyy")}
                  />
                  <Line type="monotone" dataKey="value" stroke="var(--color-value)" strokeWidth={2} dot={{ r: 4 }} />
                  <Brush dataKey="date" height={30} stroke="#8884d8" />
                  <ReferenceArea
                    x1={zoomState?.startIndex}
                    x2={zoomState?.endIndex}
                    strokeOpacity={0.3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 flex justify-end space-x-2">
              <Button onClick={() => handleZoom(null)} disabled={!zoomState}>Reset Zoom</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}