import React from 'react';
import { PolarArea, Line, Bar } from 'react-chartjs-2';
import { Card} from '@material-ui/core';

const data = {
  labels: ['cookies', 'spreads', 'breads', 'superfood'],
  datasets: [
    {
      label: 'Total purchases',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

const Polar = () => (
  <Card>
      <div className="d-flex flex-wrap justify-content-between ">
        <div style={{width: "330px",  padding: "20px"}}>
            <p style={{color: "#555555", fontWeight: "550"}}>Products bought from each category</p>
            <div className="pt-3">
            <Bar data={data} />
                </div>  
            </div>

            <div style={{width: "330px",  padding: "20px"}}>
            <p style={{color: "#555555",  fontWeight: "550"}}>Products bought from each category</p>
            <div className="pt-3">
            <PolarArea data={data} />
                </div>  
            </div>

            <div style={{width: "330px", padding: "20px"}}>
            <p style={{color: "#555555",  fontWeight: "550"}}>Products bought from each category</p>
            <div className="pt-3">
            <Line data={data} />
                </div>  
            </div>

    </div>
  </Card>
);

export default Polar;