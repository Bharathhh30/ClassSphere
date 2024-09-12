"use client"

import React from 'react'
import { Bar, BarChart, Label, Rectangle, ReferenceLine, XAxis, Tooltip, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/Card"

export default function AttendanceChart1() {
  const data = [
    { date: "2024-01-01", steps: 2000 },
    { date: "2024-01-02", steps: 2100 },
    { date: "2024-01-03", steps: 2200 },
    { date: "2024-01-04", steps: 1300 },
    { date: "2024-01-05", steps: 1400 },
    { date: "2024-01-06", steps: 2500 },
    { date: "2024-01-07", steps: 1600 },
  ]

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background p-2 border  border-blue-300 rounded ">
          <p className="text-sm font-medium">{new Date(label).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}</p>
          <p className="text-sm">{`Steps: ${payload[0].value}`}</p>
        </div>
      )
    }
    return null
  }

  return (
    <Card className="w-full max-w-lg border-none">
      <CardHeader className="space-y-0 pb-2">
        <CardDescription>Today</CardDescription>
        <CardTitle className="text-4xl tabular-nums">
          12,584{" "}
          <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
            steps
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
            >
              <XAxis 
                dataKey="date" 
                tickLine={false} 
                axisLine={false} 
                tickMargin={4}
                tickFormatter={(value) => new Date(value).toLocaleDateString("en-US", { weekday: "short" })}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="steps"
                fill="rgb(191 219 254)"
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
              <ReferenceLine
                y={1200}
                stroke="rgb(191 219 254)"
                strokeDasharray="3 3"
                strokeWidth={2}
              >
                <Label
                  value=""
                  position="insideBottomLeft"
                  offset={10}
                  fill="rgb(191 219 254)"
                />
              </ReferenceLine>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-1">
        <CardDescription>
          Over the past 7 days, you have walked{" "}
          <span className="font-medium text-foreground">53,305</span> steps.
        </CardDescription>
        <CardDescription>
          You need <span className="font-medium text-foreground">12,584</span>{" "}
          more steps to reach your goal.
        </CardDescription>
      </CardFooter>
    </Card>
  )
}