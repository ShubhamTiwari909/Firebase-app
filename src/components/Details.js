import db from './Firebase';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, createRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { toPng } from 'html-to-image';



function Details() {
  const taskId = useParams()
  const ref = createRef(null)
  const dispatch = useDispatch()
  const quotes = useSelector(state => state)


  useEffect(() => {
    async function fetch() {
      const querySnapshot1 = await getDocs(query(collection(db, "data"), where("uniqueId", "==", taskId.id)));

      dispatch({ type: "FETCH", payload: querySnapshot1.docs })
    }
    fetch();
  }, [taskId.id, dispatch])

  
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
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 mx-10">
        {
          quotes?.map((data) => (
            <div key={data._document.data.value.mapValue.fields.uniqueId.stringValue} className="my-10">
              <div className="p-4 w-full text-center bg-black rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div id={data._document.data.value.mapValue.fields.uniqueId.stringValue} ref={ref}>
                  <h5 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">{data._document.data.value.mapValue.fields.Title.stringValue}</h5>
                  <p className="mb-3 text-base text-gray-100 sm:text-lg dark:text-gray-100">{data._document.data.value.mapValue.fields.Description.stringValue}</p>
                  <p className="text-gray-300 text-sm dark:text-gray-300">{data._document.data.value.mapValue.fields.date.stringValue}</p>

                  <h1 className="my-3 ml-1 text-lg font-bold text-indigo-200">
                    By - {data._document.data.value.mapValue.fields.Name.stringValue}
                  </h1>
                </div>

                <div className="justify-center items-center mt-5 sm:flex sm:space-y-0 sm:space-x-4">
                  <div className="w-full sm:w-auto bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-200 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-gray-100">
                    <div className="text-left">
                      <button><NavLink to={`/home`}>Home</NavLink></button>
                    </div>
                  </div>
                  <div className="w-full my-4 sm:w-auto bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-200 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-gray-100">
                    <div className="text-left">
                      <button><NavLink to={`/userprofile/${data._document.data.value.mapValue.fields.userId.stringValue}`}>More Blogs</NavLink></button>
                    </div>
                  </div>

                </div>
                <div className="justify-center items-center sm:flex sm:space-y-0 sm:space-x-4 my-3">
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
  )
}

export default Details