import React from 'react';

const RealTimeGraphs = () => {
  return (
    <div className="real-time-graphs">
      <h2>Real-Time Graphs</h2>
      <iframe
        title="Streamlit Real-Time Graphs"
        width="100%"
        height="800px"
        src="http://localhost:8501" // Replace with your Streamlit API URL
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default RealTimeGraphs;