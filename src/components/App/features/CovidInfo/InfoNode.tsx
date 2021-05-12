

interface Props {
    title: string
    covidData: number
}

function InfoNode({ title, covidData }: Props) {
    return (
        <div className='bg-green-300 h-32 rounded-xl shadow-lg'>
            <div className='font-bold text-xl mb-6 underline'>{title}:</div>
            <div className='text-center font-bold text-3xl'>
                {covidData}
            </div>
        </div>
    )
}

export default InfoNode
