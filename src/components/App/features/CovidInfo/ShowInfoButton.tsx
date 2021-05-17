interface Props {
    showInfo: () => void;
    toggleInfoBool: boolean;
    disabled: boolean;
}

function ShowInfoButton({ showInfo, toggleInfoBool, disabled }: Props) {
    const showCountryText = 'Show Global Data';
    const showGlobalText = 'Show Country Data'

    return (
        <div className='text-center mt-8'>
            <button className='bg-blue-500 hover:bg-blue-400 mb-4 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
            onClick={() => showInfo()}
            disabled={disabled}>
                {toggleInfoBool ? showCountryText : showGlobalText}
            </button>
        </div>
    )
}

export default ShowInfoButton
