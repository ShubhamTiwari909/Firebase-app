// Import Firestore database
import { useEffect } from 'react';
import db from './Firebase';
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const Read = () => {

    const [info, setInfo] = useState([]);
    const navigation = useNavigate()

    const fetch = async () => {
        const querySnapshot = await getDocs(collection(db, "data"));
        querySnapshot.forEach((element) => {
            var data = element.data();
            setInfo(arr => [...arr, data]);
        });
    }

    window.onload = () => {
        fetch()
    }


    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "data", id));
        window.location.reload();
        navigation('/')
    }

    // Display the result on the page
    return (
        <div>
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center text-2xl my-5">Student Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 mx-10">
                {
                    info.map((data) => (
                        <div key={data.uniqueId} className="my-10">
                            <div className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{data.Title}</h5>
                                <p className="mb-5 text-base text-gray-100 sm:text-lg dark:text-gray-100">{data.Description}</p>
                                <p className="mb-5text-gray-300 text-sm dark:text-gray-300">{data.date}</p>
                                <div className="justify-center items-center mt-10 sm:flex sm:space-y-0 sm:space-x-4">
                                    <div className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-gray-200 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-gray-100">
                                        <div className="text-left">
                                            <button><NavLink to={`/update/${data.uniqueId}`}>Update</NavLink></button>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-auto bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-gray-200 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-red-700 dark:hover:bg-red-600 dark:focus:ring-gray-100">
                                        <div className="text-left">
                                            <button onClick={() => handleDelete(data.uniqueId)}>Delete</button>
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