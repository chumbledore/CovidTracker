import { useState, useEffect } from 'react';
import Header from './Header';
import InfoGrid from '../features/CovidInfo/InfoGrid';
import Footer from './Footer';
import agent from '../api/agent';
import ShowInfoButton from '../features/CovidInfo/ShowInfoButton';
import { Country, CovidAPIData } from '../viewmodels/CovidAPIData';
import CountrySelector from '../features/CovidInfo/CountrySelector';
import LoadingComponent from './LoadingComponent';



function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [covidInfo, setCovidInfo] = useState<CovidAPIData>();
  const [selectedCountry, setSelectedCountry] = useState<Country>();
  const [toggleData, setToggleData] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const showInfoHandler = () => {
    setToggleData(!toggleData);
  }

  useEffect(() => {
    agent.CovidInfo.list().then(res => {
      setCovidInfo(res!);
      setIsLoading(false);
    })
  }, [])

  const countrySelectionHandler = (id: string) => {
    setSelectedCountry(covidInfo!.Countries.find(country => country.ID === id));
    setDisabled(false);
  }

  if(isLoading) {
    return <LoadingComponent />
  }

  return (
    <div className='flex flex-col h-screen'>
    <Header />
    <CountrySelector
        selectCountry={countrySelectionHandler}
        selectorInfo={covidInfo!.Countries!}
        disabled={!disabled}/>
     <ShowInfoButton 
      showInfo={showInfoHandler}
      toggleInfoBool={toggleData}
      disabled={disabled}/>
      
      {toggleData ? 
          <InfoGrid title={selectedCountry!.Country} data={selectedCountry} />
        :
          <InfoGrid title='Global Covid Data' data={covidInfo!.Global}/>}
      
    <Footer />
    </div>
  );
}

export default App;