import db from './Firebase';
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Home() {

    const dispatch = useDispatch()
    const todos = useSelector(state => state)

    useEffect(() => {
        async function fetch() {
            const querySnapshot1 = await getDocs(collection(db, "data"));

            dispatch({ type: "FETCH", payload: querySnapshot1.docs })
        }
        fetch();
    }, [dispatch])

   

    return (
        <div className="mt-20">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center text-3xl mt-28">
                All the Quotes at one place for you
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 mx-10">
                {
                    todos?.map((data) => (
                        <div key={data._document.data.value.mapValue.fields.uniqueId.stringValue} className="my-10">
                            <div className="p-4 w-full text-center bg-black rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
                               >
                                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{data._document.data.value.mapValue.fields.Title.stringValue}</h5>
                                <h5 className="mb-2 text-md text-gray-900 dark:text-white">By {data._document.data.value.mapValue.fields.Name.stringValue}</h5>
                                <div className="flex justify-center items-center mt-10 sm:flex sm:space-y-0 sm:space-x-4">
                                    <div className="w-full my-4 sm:w-auto bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-200 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-gray-100">
                                        <div className="text-left">
                                            <button><NavLink to={`/details/${data._document.data.value.mapValue.fields.uniqueId.stringValue}`}>Details</NavLink></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home