import { CovidApiData } from '../../viewmodels/CovidApiData';

interface Props {
    title: string
    covidData: CovidApiData
}

function InfoNode({ title, covidData }: Props) {
    return (
        <div className='bg-green-300 h-32 rounded-tl-lg rounded-br-lg shadow-lg'>
            <div className='font-bold text-xl mb-8 underline'>{title}:</div>
            <div className='text-center font-bold'>
                {covidData}
            </div>
        </div>
    )
}

export default InfoNode
