import { useState, useEffect } from 'react';
import Header from './Header';
import InfoGrid from '../features/CovidInfo/InfoGrid';
import Footer from './Footer';
import agent from '../api/agent';


function App() {
  const [covidInfo, setCovidInfo] = useState({});
  useEffect(() => {
    agent.CovidInfo.list().then(res => {
        setCovidInfo(res.Global);
    })
  }, []);

  return (
    <div className='flex flex-col h-screen'>
    <Header />
      <InfoGrid data={covidInfo}/>
    <Footer />
    </div>
  );
}

export default App;
