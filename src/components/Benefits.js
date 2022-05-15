import React from 'react'
import Benefit from './image/Benefits.png'
function Example() {
    return (
        <div className='px-3 md:px-10'>
            <div class="text-3xl md:text-5xl font-extrabold text-center">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Blood Donation Benefits
                </span>
            </div>
            <img alt="Benefits of blood donation" src={Benefit} 
                 className="my-6 rounded-full p-1 md:p-4 ring-2 ring-black border-2 border-red-500 md:border-4" />
        </div>
    )
}

export default Example