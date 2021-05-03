export default function Header() {
    return (
        <header className='text-center bg-gradient-to-r from-green-400 via-blue-700 to-green-700 text-white p-4 mb-4'>
            <div className='text-3xl md:text-5xl font-bold mb-3'>
            Covid-19 Tracker
            </div>
            <p>API courtesy of <a className='text-blue-300' 
                target='_blank'
                rel='noopener noreferrer'
                href="https://covid19api.com"
                >covid19api.com</a></p>
        </header>    
    )
}
