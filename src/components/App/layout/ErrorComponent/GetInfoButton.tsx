interface Props {
    fallBackOnClick: () => void;
}

function GetInfoButton({ fallBackOnClick }: Props) {
    return (
        <button className='bg-blue-500 hover:bg-blue-400 mb-4 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
            onClick={fallBackOnClick}>
                Try again!
        </button>
    )
}

export default GetInfoButton
