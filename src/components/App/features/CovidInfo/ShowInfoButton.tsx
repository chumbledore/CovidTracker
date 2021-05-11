interface Props {
    showGlobalInfo: () => void;
    toggleInfoBool: boolean;
}

function ShowInfoButton({ showGlobalInfo, toggleInfoBool }: Props) {
    const showText = 'Show Global Data';
    const hideText = 'Hide Global Data'

    return (
        <div className='text-center mt-8'>
            <button className='bg-blue-500 hover:bg-blue-400 mb-4 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
            onClick={() => showGlobalInfo()}>
                {toggleInfoBool ? hideText : showText}
            </button>
        </div>
    )
}

export default ShowInfoButton
