import React from 'react';

const PowerBIDashboard = () => {
  return (
    <div className="powerbi-dashboard">
      <h2>Power BI Dashboard</h2>
      <iframe
        title="Power BI Dashboard"
        width="100%"
        height="800px"
        src="https://app.powerbi.com/reportEmbed?reportId=YOUR_REPORT_ID&groupId=YOUR_GROUP_ID"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PowerBIDashboard;