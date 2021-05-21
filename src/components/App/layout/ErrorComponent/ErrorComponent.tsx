import GetInfoButton from "./GetInfoButton";

interface Props {
    fallBackOnClick: () => void;
}

function ErrorComponent({ fallBackOnClick }: Props) {
    return (
        <div className='flex flex-grow h-screen justify-center items-center text-3xl font-bold'>
            <div className='grid grid-cols-1 space-y-5'>
                <span>Something went wrong. Please try again!</span>
                <GetInfoButton fallBackOnClick={fallBackOnClick}/>
            </div>
        </div>
    )
}

export default ErrorComponent
