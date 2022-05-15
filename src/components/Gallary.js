import React from 'react'
import Collageimg1 from './image/Collageimg1.jpg'
import Collageimg2 from './image/Collageimg2.jpg'
import Collageimg3 from './image/Collageimg3.jpg'
import Collageimg4 from './image/Collageimg4.jpg'
import Collageimg5 from './image/Collageimg5.jpg'
import Collageimg6 from './image/Collageimg6.jpg'
import Building1 from './image/building1.jpg'
import Building2 from './image/building2.jpg'
import Building3 from './image/building3.jpg'
function Gallary() {
    return (
        <div>
            <div className="text-3xl md:text-5xl font-extrabold text-center my-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-red-700 to-violet-700">
                    Welcome to Care Blood
                </span>
            </div>
            <section className="overflow-hidden text-gray-700">
                <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-fit object-center w-full h-full rounded-lg"
                                    src={Collageimg1} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-fit object-center w-full h-full rounded-lg"
                                    src={Collageimg2} />
                            </div>
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-fit object-center w-full h-full rounded-lg"
                                    src={Collageimg3} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-fit object-center w-full h-full rounded-lg"
                                    src={Collageimg4} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-fit object-center w-full h-full rounded-lg"
                                    src={Collageimg5} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-fit object-center w-full h-full rounded-lg"
                                    src={Building2} />
                            </div>
                        </div>

                        <div className="flex flex-wrap w-1/2">
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-fit object-center w-full h-full rounded-lg"
                                    src={Building1} />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-fit object-center w-full h-full rounded-lg"
                                    src={Collageimg6} />
                            </div>
                        </div>

                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-fit object-center w-full h-full rounded-lg"
                                    src={Building3} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallary