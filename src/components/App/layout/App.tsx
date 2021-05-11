import { useState, useEffect } from 'react';
import Header from './Header';
import InfoGrid from '../features/CovidInfo/InfoGrid';
import Footer from './Footer';
import agent from '../api/agent';
import ShowInfoButton from '../features/CovidInfo/ShowInfoButton';


function App() {
  const [globalCovidInfo, setGlobalCovidInfo] = useState({});
  const [toggleGlobalData, setToggleGlobalData] = useState(false);

  const showGlobalCovidInfo = () => {
    setToggleGlobalData(!toggleGlobalData);
  }

  useEffect(() => {
    agent.CovidInfo.list().then(res => {
      setGlobalCovidInfo(res.Global);
    })
  }, [])

  return (
    <div className='flex flex-col h-screen'>
    <Header />
     <ShowInfoButton 
      showGlobalInfo={showGlobalCovidInfo}
      toggleInfoBool={toggleGlobalData}/>
      {toggleGlobalData ? <InfoGrid globalData={globalCovidInfo}/> : ''} 
    <Footer />
    </div>
  );
}

export default App;
