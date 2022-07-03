// Import Firestore database
import db from './Firebase';
import { collection, doc, getDocs, deleteDoc, query, where } from "firebase/firestore";
import { useState, useEffect, useCallback, createRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { toPng } from 'html-to-image';


const Read = ({ userId }) => {

    const [search, setSearch] = useState("")
    const ref = createRef(null)
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const quotes = useSelector(state => state)

    const handleSearch = e => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        async function fetch() {
            const querySnapshot1 = await getDocs(query(collection(db, "data"), where("userId", "==", userId)));

            dispatch({ type: "FETCH", payload: querySnapshot1.docs })
        }
        fetch();
    }, [dispatch, userId])


    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "data", id));
        toast.error("Task deleted successfully", { theme: "dark", icon: "🚀" })
        navigation('/home')
    }
    //image download section
    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current)
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'Quotes.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    // Display the result on the page
    return (
        <div>
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center text-3xl mt-28">
                Your Profile
            </h2>
            <div className="my-5 grid place-content-center">
                <input type="text" className="py-1 px-3 border-b-2 rounded border-slate-700 transition-all duration-400 ease-out 
                hover:border-t-2 hover:border-l-2 hover:border-r-2 hover:rounded-md hover:border-l-indigo-400 hover:border-t-pink-400
                hover:border-r-purple-400 hover:border-b-indigo-500
                focus:outline-none" value={search} onChange={handleSearch} placeholder="🗯 Search" />
            </div>

            <div className="grid place-content-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-xl my-5 font-bold">
                <p className="place-self-center">Your Quotes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 mx-10">
                {
                    quotes?.filter(function Search(task) {
                        if (search === "") {
                            return task
                        }
                        else {
                            return task._document.data.value.mapValue.fields.Title.stringValue.includes(search.toUpperCase());
                        }
                    }).map((data) => (
                        <div key={data._document.data.value.mapValue.fields.uniqueId.stringValue} className="my-10">

                            <div className="p-4 w-full text-center bg-black rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <div ref={ref}>
                                    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{data._document.data.value.mapValue.fields.Title.stringValue}</h5>
                                    <p className="mb-5 text-base text-gray-100 sm:text-lg dark:text-gray-100">{data._document.data.value.mapValue.fields.Description.stringValue}</p>
                                    <p className="mb-5text-gray-300 text-sm dark:text-gray-300">{data._document.data.value.mapValue.fields.date.stringValue}</p>
                                    <h1 className="my-3 ml-1 text-lg font-bold text-indigo-200">
                                        By - {data._document.data.value.mapValue.fields.Name.stringValue}
                                    </h1>
                                </div>
                                <div className="justify-center items-center mt-10 sm:flex sm:space-y-0 sm:space-x-4 mb-4">
                                    <div className="w-full my-4 sm:w-auto bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-200 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-gray-100">
                                        <div className="text-left">
                                            <button><NavLink to={`/update/${data._document.data.value.mapValue.fields.uniqueId.stringValue}`}>Update</NavLink></button>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-auto bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-200 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-red-700 dark:hover:bg-red-600 dark:focus:ring-gray-100">
                                        <div className="text-left">
                                            <button onClick={() => handleDelete(data._document.data.value.mapValue.fields.uniqueId.stringValue)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center items-center sm:flex sm:space-y-0 sm:space-x-4">
                                    <div className="w-full mb-4 sm:w-auto bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-200 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-gray-100">
                                        <div className="text-left">
                                            <button
                                                onClick={onButtonClick}>
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>

        </div>

    );
}


export default Read;
