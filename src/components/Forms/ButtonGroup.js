import React from 'react'
import {Link} from 'react-router-dom'
function ButtonGroup({addButtonName,cancelButtonName}) {
    return (
        <div>
            <div className="flex justify-center items-center space-x-3">
                <div className="md:w-1/3"></div>
                <div className="md:w-1/3">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit">
                        {addButtonName}
                    </button>
                </div>
                <div className="md:w-1/3">
                    <button className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        <Link to='/home'>{cancelButtonName}</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ButtonGroup