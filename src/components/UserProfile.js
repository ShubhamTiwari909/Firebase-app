import db from './Firebase';
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect, useCallback, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toPng } from 'html-to-image';
import {
  darkBackground, lightBackground, indigoBackground, blueBackground, violetBackground,
  purpleGradientBackground, blueGradientBackground, greenGradientBackground
} from './BackgroundColors'
function UserProfile() {
  const [search, setSearch] = useState("")
  const [bgColor, setBgColor] = useState("bg-slate-100")
  const [textColor, setTextColor] = useState("text-slate-800");
  const userId = useParams();
  const ref = createRef(null)
  const dispatch = useDispatch()
  const quotes = useSelector(state => state)

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

  return (
    <div className="mt-30">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-700 to-violet-800 text-center text-2xl mt-28">
        {quotes[0]._document.data.value.mapValue.fields.Name.stringValue} Profile
      </h2>
      <div className="my-5 grid place-content-center">
        <input type="text" className="py-1 px-3 border-b-2 rounded border-slate-700 transition-all duration-400 ease-out 
                hover:border-t-2 hover:border-l-2 hover:border-r-2 hover:rounded-md hover:border-l-indigo-400 hover:border-t-pink-400
                hover:border-r-purple-400 hover:border-b-indigo-500
                focus:outline-none" value={search} onChange={handleSearch} placeholder="🗯 Search" />
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
              <div className="p-4 w-full text-center bg-stone-700 rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">

                <div ref={ref}
                  className={`p-4 w-full text-center ${bgColor} rounded-lg border shadow-md sm:p-8
                `}>
                  <h5 className={`mb-2 text-3xl font-bold ${textColor}`}>{data._document.data.value.mapValue.fields.Title.stringValue}</h5>
                  <p className={`mb-5 text-base ${textColor} sm:text-lg`}>{data._document.data.value.mapValue.fields.Description.stringValue}</p>
                  <p className={`mb-5 ${textColor} text-sm `}>{data._document.data.value.mapValue.fields.date.stringValue}</p>
                  <h1 className={`my-3 ml-1 text-lg font-bold ${textColor}`}>
                    By - {data._document.data.value.mapValue.fields.Name.stringValue}
                  </h1>
                </div>
                <div className="bg-slate-400 px-2 py-1.5 rounded-md my-3 flex space-x-3">
                  <button onClick={() => darkBackground(setBgColor, setTextColor)} className="rounded-full p-2 bg-black"></button>
                  <button onClick={() => lightBackground(setBgColor, setTextColor)} className="rounded-full p-2 bg-white"></button>
                  <button onClick={() => indigoBackground(setBgColor, setTextColor)} className="rounded-full p-2 bg-indigo-700"></button>
                  <button onClick={() => blueBackground(setBgColor, setTextColor)} className="rounded-full p-2 bg-blue-600"></button>
                  <button onClick={() => violetBackground(setBgColor, setTextColor)} className="rounded-full p-2 bg-violet-700"></button>
                  <button onClick={() => purpleGradientBackground(setBgColor, setTextColor)} className="rounded-full p-2 bg-gradient-to-r from-indigo-300 to-purple-400"></button>
                  <button onClick={() => blueGradientBackground(setBgColor, setTextColor)} className="rounded-full p-2 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"></button>
                  <button onClick={() => greenGradientBackground(setBgColor, setTextColor)} className="rounded-full p-2 bg-gradient-to-r from-green-500 to-green-700"></button>
                </div>

                <div className="w-full my-4 sm:w-auto bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-200 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-gray-100">
                  <div className="text-left">
                    <button
                      onClick={onButtonClick}>
                      Download
                    </button>
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

export default UserProfile