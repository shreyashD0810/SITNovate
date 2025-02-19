import React from 'react';

const DatasetOverview = ({ dataset }) => {
  if (!dataset) {
    return <p>Please upload a dataset to view overview.</p>;
  }

  return (
    <div className="dataset-overview">
      <h2>Dataset Overview</h2>
      <p>
        The dataset contains {dataset.length} rows and {Object.keys(dataset[0]).length} columns.
      </p>
      <ul>
        <li><strong>Time Range:</strong> {dataset[0].order_date} to {dataset[dataset.length - 1].order_date}</li>
      </ul>
    </div>
  );
};

export default DatasetOverview;