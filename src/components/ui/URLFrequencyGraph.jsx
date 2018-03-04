import React, { Component } from 'react'
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis
} from 'recharts'

import { formatDate } from '../../lib/dates'

const generateDataTable = (data) => {
  const dateOnly = (date) => {
    const thisDate = new Date(date)
    thisDate.setHours(0, 0, 0, 0)
    return thisDate.valueOf()
  }

  const dates = data.map(click => dateOnly(click.createdAt))
  const uniqueDates = [...new Set(dates)]

  return (uniqueDates.map(currentDate => Object.assign({}, {
    date: formatDate(currentDate),
    clicks: data.filter(i => dateOnly(i.createdAt) === currentDate).length
  })))
}

class URLFrequencyGraph extends Component {
  render() {
    return (
      <ResponsiveContainer
        width='100%'
        height={100}
      >
        <LineChart data={generateDataTable(this.props.clicks)}>
          <Tooltip />
          <XAxis dataKey='date' />
          <Line type='monotone' dataKey='clicks' stroke="#17a2b8" />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}

export default URLFrequencyGraph
