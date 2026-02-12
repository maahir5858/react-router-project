import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

function Error() {

    const error = useRouteError();
    const navigateHook = useNavigate();

    return (
        <div className='flex flex-col justify-center items-center my-20'>
            <p className='text-3xl font-medium mb-10 mt-5'>Error occured - {error.message}</p>
            <button
                onClick={() => navigateHook('/')}
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-4 focus:outline-none cursor-pointer"
            >Go to Homepage</button>
        </div>
    );
}

export default Error