// Import Firestore database
import { useEffect } from 'react';
import db from './Firebase';
import { collection, doc, getDocs, deleteDoc,query,where } from "firebase/firestore";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {toast} from 'react-toastify';


const Read = () => {

    const [info, setInfo] = useState([]);
    const [search, setSearch] = useState("")
    const navigation = useNavigate()
    const dispatch = useDispatch()
    
    const todos = useSelector(state => state)

    useEffect(() => {
        async function fetch(){
            const querySnapshot1 = await getDocs(query(collection(db, "data"),where("Title","==",search)));
            const querySnapshot2 = await getDocs(collection(db, "data"));
            setInfo(search === "" ? querySnapshot2.docs : querySnapshot1.docs)
            dispatch({ type: "FETCH", payload: info })
        }
        fetch();
    }, [info,dispatch])
    

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "data", id));
        toast.error("Task deleted successfully")
        navigation('/')
    }

    // Display the result on the page
    return (
        <div>
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center text-2xl my-5">Task Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 mx-10">
                {
                    todos.map((data) => (
                        <div key={data._document.data.value.mapValue.fields.uniqueId.stringValue} className="my-10">
                            <div className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{data._document.data.value.mapValue.fields.Title.stringValue}</h5>
                                <p className="mb-5 text-base text-gray-100 sm:text-lg dark:text-gray-100">{data._document.data.value.mapValue.fields.Description.stringValue}</p>
                                <p className="mb-5text-gray-300 text-sm dark:text-gray-300">{data._document.data.value.mapValue.fields.date.stringValue}</p>
                                <div className="justify-center items-center mt-10 sm:flex sm:space-y-0 sm:space-x-4">
                                    <div className="w-full my-4 sm:w-auto bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-gray-200 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-gray-100">
                                        <div className="text-left">
                                            <button><NavLink to={`/update/${data._document.data.value.mapValue.fields.uniqueId.stringValue}`}>Update</NavLink></button>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-auto bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-gray-200 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-red-700 dark:hover:bg-red-600 dark:focus:ring-gray-100">
                                        <div className="text-left">
                                            <button onClick={() => handleDelete(data._document.data.value.mapValue.fields.uniqueId.stringValue)}>Delete</button>
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
