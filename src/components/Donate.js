import React from 'react'

function Donate(props) {
    const lightgradientText = "bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-400 to-violet-400"
    const darkgradientText = "bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-red-700 to-violet-700"
    return (
        <div className="my-28 mx-6">
            <div className="text-3xl md:text-5xl font-extrabold text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Book your slot
                </span>
            </div>
            <form className="w-full mx-auto max-w-lg p-5 md:p-10 my-10 rounded-lg ring-2 md:ring-4 ring-purple-400"
                style={{ backgroundColor: props.toggleDarkmode ? "white" : "black" }}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide font-extrabold mb-2" htmlFor="grid-first-name">
                            <span className={props.toggleDarkmode ? darkgradientText : lightgradientText }>
                                First Name
                            </span>
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="firstname..." />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="grid-last-name">
                            <span className={props.toggleDarkmode ? darkgradientText : lightgradientText }>
                                Last Name
                            </span>
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="lastname..." />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 font-bold mb-2" htmlFor="grid-password">
                            <span className={props.toggleDarkmode ? darkgradientText : lightgradientText }>
                                Email
                            </span>
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="email..." />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700  font-bold mb-2" htmlFor="grid-first-name">
                            <span className={props.toggleDarkmode ? darkgradientText : lightgradientText }>
                                Address
                            </span>
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" placeholder="address..." />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700  font-bold mb-2" htmlFor="grid-last-name">
                            <span className={props.toggleDarkmode ? darkgradientText : lightgradientText }>
                                Phone no.
                            </span>
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-purple-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="phone..." />
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="px-6 py-3 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Donate