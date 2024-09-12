import React from 'react'

// ChartConfig type
const ChartConfig = {}

// ChartContainer component
export const ChartContainer = ({ children, config, className }) => {
  return (
    <div
      className={`chart-container ${className}`}
      style={{ '--chart-colors': Object.values(config).map(c => c.color).join(' ') }}
    >
      {children}
    </div>
  )
}

// ChartTooltip component
export const ChartTooltip = ({ active, payload, label, content }) => {
  if (!active || !payload) return null
  return React.createElement(content, { active, payload, label })
}

// ChartTooltipContent component
export const ChartTooltipContent = ({
  active,
  payload,
  label,
  labelFormatter,
  valueFormatter,
  indicator = 'line',
}) => {
  if (!active || !payload) return null
  return (
    <div className="chart-tooltip">
      <div className="chart-tooltip-label">
        {labelFormatter ? labelFormatter(label) : label}
      </div>
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="chart-tooltip-item">
          <div
            className="chart-tooltip-indicator"
            style={{ backgroundColor: entry.color }}
          />
          <div className="chart-tooltip-label">{entry.name}</div>
          <div className="chart-tooltip-value">
            {valueFormatter ? valueFormatter(entry.value) : entry.value}
          </div>
        </div>
      ))}
    </div>
  )
}

// ChartLegend component
export const ChartLegend = ({ content }) => {
  return <div className="chart-legend">{content}</div>
}

// ChartLegendContent component
export const ChartLegendContent = () => {
  return (
    <div className="chart-legend-content">
      {/* Add your legend content here */}
    </div>
  )
}

export { ChartConfig }
