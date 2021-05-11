import Moment from 'react-moment';
import InfoNode from './InfoNode';
import CountrySelector from './CountrySelector';

interface Props {
    globalData: any
};

function InfoGrid({ globalData }: Props) {
    const dateToFormat = globalData.Date;

    return (
        <>
        <span className='text-center text-5xl mb-2'>Global Covid Data</span>
        <Moment format='MM/DD/YYYY' date={dateToFormat} className='text-center text-2xl mb-4'/>
            <div className='container max-w-3xl text-center flex flex-grow mb-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                <InfoNode title='New Confirmed Cases' covidData={globalData.NewConfirmed}/>
                <InfoNode title='Total Confirmed Cases' covidData={globalData.TotalConfirmed}/>
                <InfoNode title='New Deaths' covidData={globalData.NewDeaths}/>
                <InfoNode title='Total Deaths' covidData={globalData.TotalDeaths}/>
                <InfoNode title='Newly Recovered' covidData={globalData.NewRecovered}/>
                <InfoNode title='Total Recovered' covidData={globalData.TotalRecovered}/>
            </div>
        </>
    )
}

export default InfoGrid
