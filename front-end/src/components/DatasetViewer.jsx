import React from 'react';

const DatasetViewer = ({ dataset }) => {
  if (!dataset) {
    return <p>Please upload a dataset to view.</p>;
  }

  return (
    <div className="dataset-viewer">
      <h2>Dataset Viewer</h2>
      <table>
        <thead>
          <tr>
            {Object.keys(dataset[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataset.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DatasetViewer;