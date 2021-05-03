import Moment from 'react-moment';
import InfoNode from './InfoNode';

interface Props {
    data: any
};

function InfoGrid({ data }: Props) {
    const dateToFormat = data.Date;

    return (
        <>
        <span className='text-center text-5xl mb-4'>Global Covid Data</span>
        <Moment format='MM/DD/YYYY' date={dateToFormat} className='text-center text-2xl'/>
            <div className='container max-w-8 text-center flex flex-grow mb-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                <InfoNode title='New Confirmed Cases' covidData={data.NewConfirmed}/>
                <InfoNode title='Total Confirmed Cases' covidData={data.TotalConfirmed}/>
                <InfoNode title='New Deaths' covidData={data.NewDeaths}/>
                <InfoNode title='Total Deaths' covidData={data.TotalDeaths}/>
                <InfoNode title='Newly Recovered' covidData={data.NewRecovered}/>
                <InfoNode title='Total Recovered' covidData={data.TotalRecovered}/>
            </div>
        </>
    )
}

export default InfoGrid
