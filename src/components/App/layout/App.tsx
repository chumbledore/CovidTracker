import { useState } from 'react';
import Header from './Header';
import InfoGrid from '../features/CovidInfo/InfoGrid';
import Footer from './Footer';
import agent from '../api/agent';
import GetInfoComponent from '../features/CovidInfo/GetInfoComponent';


function App() {
  const [globalCovidInfo, setGlobalCovidInfo] = useState({});
  const [showGlobalData, setShowGlobalData] = useState(false);

  const getGlobalCovidInfo = () => {
    agent.CovidInfo.list().then(res => {
      setGlobalCovidInfo(res.Global);
      setShowGlobalData(true);
    })
  }

  return (
    <div className='flex flex-col h-screen'>
    <Header />
      {showGlobalData ? <InfoGrid data={globalCovidInfo}/> : <GetInfoComponent getGlobalInfo={getGlobalCovidInfo}/>}  
    <Footer />
    </div>
  );
}

export default App;
