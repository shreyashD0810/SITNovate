import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FileUpload from './components/FileUpload';
import DatasetOverview from './components/DatasetOverview';
import PowerBIDashboard from './components/PowerBIDashboard';
import DataAnalysis from './components/DataAnalysis';
import DatasetViewer from './components/DatasetViewer';
import RealTimeGraphs from './components/RealTimeGraphs';
import './styles.css';

const App = () => {
  const [dataset, setDataset] = useState(null);

  const handleFileUpload = (data) => {
    setDataset(data);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <FileUpload onFileUpload={handleFileUpload} />
        <Routes>
          <Route path="/" element={<DatasetOverview dataset={dataset} />} />
          <Route path="/powerbi" element={<PowerBIDashboard dataset={dataset} />} />
          <Route path="/analysis" element={<DataAnalysis dataset={dataset} />} />
          <Route path="/dataset" element={<DatasetViewer dataset={dataset} />} />
          <Route path="/realtime" element={<RealTimeGraphs dataset={dataset} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;