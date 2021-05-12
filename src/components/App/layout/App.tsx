import { useState, useEffect } from 'react';
import Header from './Header';
import InfoGrid from '../features/CovidInfo/InfoGrid';
import Footer from './Footer';
import agent from '../api/agent';
import ShowInfoButton from '../features/CovidInfo/ShowInfoButton';
import { Country, Global } from '../viewmodels/CovidAPIData';
import CountrySelector from '../features/CovidInfo/CountrySelector';



function App() {
  const [globalCovidInfo, setGlobalCovidInfo] = useState<Global>();
  const [countryCovidInfo,  setCountryCovidInfo] = useState<Country[]>([]);
  const [toggleGlobalData, setToggleGlobalData] = useState<boolean>(false);

  const showGlobalCovidInfo = () => {
    setToggleGlobalData(!toggleGlobalData);
  }

  useEffect(() => {
    agent.CovidInfo.list().then(res => {
      setGlobalCovidInfo(res.Global!);
      setCountryCovidInfo(res.Countries!);
      console.log(res.Countries);
    })
  }, [])

  return (
    <div className='flex flex-col h-screen'>
    <Header />
     <ShowInfoButton 
      showGlobalInfo={showGlobalCovidInfo}
      toggleInfoBool={toggleGlobalData}/>
      {toggleGlobalData ? <InfoGrid globalData={globalCovidInfo!}/> : ''}
      <CountrySelector selectorInfo={countryCovidInfo}/> 
    <Footer />
    </div>
  );
}

export default App;