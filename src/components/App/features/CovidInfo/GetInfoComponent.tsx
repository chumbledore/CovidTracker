interface Props {
    getGlobalInfo: () => void;
}

function GetInfoComponent({ getGlobalInfo }: Props) {
    return (
        <div className='text-center'>
            <button className='bg-blue-500 hover:bg-blue-400 mb-16 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
            onClick={() => getGlobalInfo()}>
                Get Global Data Here!
            </button>
            <div className='font-bold text-3xl mb-16'>OR!</div>
            <div className='inline-block relative w-64'>
                <select className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
                    <option value='0'>Select Country</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                    <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/></svg>
                </div>
            </div>
        </div>
    )
}

export default GetInfoComponent
