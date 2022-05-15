import React from 'react'
import Image1 from './image/image1.png'
import Image2 from './image/image2.png'
import Image3 from './image/image3.png'
import './Carousel.css'

function CarouselMaker() {
    return (
        <div className="carouselSize">
            <div class="text-3xl md:text-5xl font-extrabold text-center my-8">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-red-700 to-violet-700">
                    Welcome to Care Blood
                </span>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src={Image1}
                            className="block w-full"
                            alt="..."
                        />

                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Image2}
                            className="block w-full"
                            alt="..."
                        />

                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src={Image3}
                            className="block w-full"
                            alt="..."
                        />

                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat bg-slate-900 rounded-md" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat bg-slate-900 rounded-md" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default CarouselMaker