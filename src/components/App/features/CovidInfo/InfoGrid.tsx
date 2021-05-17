import Moment from 'react-moment';
import InfoNode from './InfoNode';
import { Country, Global } from '../../viewmodels/CovidAPIData';

interface Props {
    data: Global | Country | undefined;
    title: string;
};

function InfoGrid({ data, title }: Props) {
    const dateToFormat = data!.Date;

    return (
        <>
        <span className='text-center text-5xl mb-2'>{title}</span>
        <Moment format='MM/DD/YYYY' date={dateToFormat} className='text-center text-2xl mb-4'/>
            <div className='container max-w-3xl text-center flex flex-grow mb-auto grid grid-cols-1 md:grid-cols-2 gap-4'>
                <InfoNode title='New Confirmed Cases' covidData={data!.NewConfirmed}/>
                <InfoNode title='Total Confirmed Cases' covidData={data!.TotalConfirmed}/>
                <InfoNode title='New Deaths' covidData={data!.NewDeaths}/>
                <InfoNode title='Total Deaths' covidData={data!.TotalDeaths}/>
                <InfoNode title='Newly Recovered' covidData={data!.NewRecovered}/>
                <InfoNode title='Total Recovered' covidData={data!.TotalRecovered}/>
            </div>
        </>
    )
}

export default InfoGrid
