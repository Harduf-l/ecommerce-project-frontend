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
        'rgba(139, 179, 133, 0.7)',
        'rgba(136, 146, 155, 0.7)',
        'rgba(221, 148, 49, 0.7)',
        'rgba(68, 166, 243, 0.7)',
      ],
      borderWidth: 1,
    },
  ],
};

const data2 = {
    labels: ['chocolate cookie', 'nut spread', 'berries'],
    datasets: [
      {
        label: 'Most popular products',
        data: [122, 193, 103],
        backgroundColor: [
          'rgba(139, 179, 133, 0.7)',
          'rgba(136, 146, 155, 0.7)',
          'rgba(221, 148, 49, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

const Polar = () => (
  <Card>
      <div className="d-flex flex-wrap justify-content-between ">
        <div style={{width: "330px",  padding: "20px"}}>
            <p style={{color: "#555555", fontWeight: "550",  textAlign: "center"}}>Products bought from each category</p>
            <div className="pt-3">
            <Bar data={data} />
                </div>  
            </div>

            <div style={{width: "330px",  padding: "20px"}}>
            <p style={{color: "#555555",  fontWeight: "550", textAlign: "center"}}>Most popular products</p>
            <div className="pt-3">
            <PolarArea data={data2} />
                </div>  
            </div>

            <div style={{width: "330px", padding: "20px"}}>
            <p style={{color: "#555555",  fontWeight: "550",  textAlign: "center"}}>Most loved products</p>
            <div className="pt-3">
            <Line data={data} />
                </div>  
            </div>

    </div>
  </Card>
);

export default Polar;