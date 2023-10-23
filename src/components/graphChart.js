import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Graphharts = () => {

  const [chartData, setChartData] = useState({
    series: [
      {
        name: '',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66,88,99],
      },
      {
        name: '',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94,100,110],
      },
    ],
    options: {
      legend: {
        show: false
      },
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: true,
          tools: {
            download: false
          }
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
        colors: ['#2563eb', '#1e293b'], // Custom colors for the bars
      },
      xaxis: {
        categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      },
      yaxis: {
      labels: {
        show: true,
        formatter: function (val) {
          return '$' + val; // Add "$" sign and 'k' for thousands
        },
      },
    },
    
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex }) {
          const month = chartData.options.xaxis.categories[dataPointIndex];
          const tooltipContent = `
          <div style='width: 200px'>
         
   <div className='flex items-center  mt-4 justify-between mb-2' style="margin:10px; display: flex; justify-content: space-between">
   <span style='font-size: 16px; font-weight: 500'>${month}</span>
   <span  style='color: blue'>$${chartData.series[0].data[dataPointIndex]}</span>
   </div>
   <div style='margin: 10px'>
    <div>
    ${chartData.series[1].data[dataPointIndex]} sales
    <div>
    <div>
    ${chartData.series[0].data[dataPointIndex]} Appointments
    <div>
    <div>
          `;
          return tooltipContent;
        },
      },
    },
  });

  return (
    <div>
      <div className='grid grid my-16 grid-cols-6 gap-4'>
        <h4 className='col-span-4'>
          Revenue
        </h4>
        <div className='flex row col-span-2 justify-between'>
          <div className='flex row items-center'>
          <div className='bg-blue-1 flex  rounded-lg w-4 h-4'/>
        <div className='ml-2'>Sale</div>
        </div>
        <div className='flex row items-center'>
          <div className='bg-black-2 flex  rounded-lg w-4 h-4'/>
        <div className='ml-2'>Appointments</div>
        </div>
          <div>Last 12 Months </div>
        </div>
      </div>
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={chartData.options.chart.height} />
    </div>
    </div>
  );
}

export default Graphharts;
