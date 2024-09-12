import React from 'react';
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";

const ActivityChart = () => {
  const data = [
    {
      activity: "Standing",
      value: 66.67, // 8/12 * 100
      fill: "rgb(191 219 254)", // blue-200
    },
    {
      activity: "Exercising",
      value: 60.83, // 73/120 * 100
      fill: "rgb(96 165 250)", // blue-400
    },
    {
      activity: "Moving",
      value: 93.67, // 562/600 * 100
      fill: "rgb(37 99 235)", // blue-600
    },
  ];

  return (
    <div className="max-w-sm mx-auto bg-white  rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Daily Activity</h2>
        <div className="flex justify-between mb-6">
          {data.map((item) => (
            <div key={item.activity} className="text-center">
              <div className="text-sm font-medium text-gray-500">{item.activity}</div>
              <div className="text-lg font-bold text-gray-800">{item.value.toFixed(1)}%</div>
            </div>
          ))}
        </div>
        <div className="w-64 h-64 mx-auto">
          <RadialBarChart
            width={256}
            height={256}
            innerRadius="30%"
            outerRadius="100%"
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              dataKey="value"
              cornerRadius={10}
              fill="#blue"
            />
          </RadialBarChart>
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;