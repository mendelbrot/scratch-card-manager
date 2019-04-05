import React from 'react'
import {Pie} from 'react-chartjs-2/'

const COLORS = {
  AVAILABLE: '#157145',
  ASSIGNED: '#FA9F42',
  REDEEMED: '#1F5673'
}

const PieChart = ({data}) => {
  const {imageSrc, inventory, name} = data
  const {available, assigned, redeemed} = inventory
  const chartData = {
    labels: ['Available', 'Assigned', 'Redeemed'],
    datasets: [
      {
        data: [available, assigned, redeemed],
        backgroundColor: [COLORS.AVAILABLE, COLORS.ASSIGNED, COLORS.REDEEMED],
        hoverBackgroundColor: [
          COLORS.AVAILABLE,
          COLORS.ASSIGNED,
          COLORS.REDEEMED
        ]
      }
    ],
    fontColor: 'white'
  }
  return (
    <React.Fragment>
      <h5>{name}</h5>
      <img width={250} height={250} src={imageSrc} alt="scratch card" />
      <Pie width={250} height={250} data={chartData} />
    </React.Fragment>
  )
}

export default PieChart