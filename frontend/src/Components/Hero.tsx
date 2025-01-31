import Store from '../assets/store.png'

/*
export default function Hero() {
    return (<>
        <div>
            <div className="flex">
                <div>Use E-Commerce to speed up your clients and infrastruture</div>
                <img src={Store} alt='' />
            </div>
        </div>
    </>)
}
*/



export default function Hero() {
    return (
        <div className="mx-auto mt-8 flex flex-col md:flex-row items-center justify-center p-4 max-w-1xl lg:max-w-7xl lg:px-8">
            <div className="text-center md:text-left md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Drive Success<br></br>Through E-Commerce
                </h1>
                <p className="text-lg text-gray-600">
                    Enhance customer experience with our solutions.
                </p>
            </div>
            <img className="max-w-sm mt-4 md:mt-0 md:w-1/2" src={Store} alt="E-Commerce Store" />
        </div>
    );
}