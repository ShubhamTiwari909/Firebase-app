import db from './Firebase';
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function UserProfile() {
  const [search, setSearch] = useState("")

  const userId = useParams();
  const dispatch = useDispatch()

  const todos = useSelector(state => state)

  const handleSearch = e => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    async function fetch() {
      const querySnapshot1 = await getDocs(query(collection(db, "data"), where("userId", "==", userId.id)));

      dispatch({ type: "FETCH", payload: querySnapshot1.docs })
    }
    fetch();
  }, [dispatch, userId])

  return (
    <div className="mt-30">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-700 to-violet-800 text-center text-2xl mt-28">
        {todos[0]._document.data.value.mapValue.fields.Name.stringValue} Profile
      </h2>
      <div className="my-5 grid place-content-center">
        <input type="text" className="py-1 px-3 border-b-2 rounded border-slate-700 transition-all duration-400 ease-out 
                hover:border-t-2 hover:border-l-2 hover:border-r-2 hover:rounded-md hover:border-l-indigo-400 hover:border-t-pink-400
                hover:border-r-purple-400 hover:border-b-indigo-500
                focus:outline-none" value={search} onChange={handleSearch} placeholder="🗯 Search" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 mx-10">
        {
          todos?.filter(function Search(task) {
            if (search === "") {
              return task
            }
            else {
              return task._document.data.value.mapValue.fields.Title.stringValue.includes(search.toUpperCase());
            }
          }).map((data) => (
            <div key={data._document.data.value.mapValue.fields.uniqueId.stringValue} className="my-10">
              <div className="p-4 w-full text-center bg-black rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{data._document.data.value.mapValue.fields.Title.stringValue}</h5>
                <p className="mb-5 text-base text-gray-100 sm:text-lg dark:text-gray-100">{data._document.data.value.mapValue.fields.Description.stringValue}</p>
                <p className="mb-5text-gray-300 text-sm dark:text-gray-300">{data._document.data.value.mapValue.fields.date.stringValue}</p>
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default UserProfile