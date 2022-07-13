import { useState, createRef, useRef } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import QuoteFrame from './ViewComponents/QuoteFrame'
import BackgroundChangerFrame from './ViewComponents/BackgroundChangerFrame'
import LikeAndDownloadsNumberFrame from './ViewComponents/LikeAndDownloadsNumberFrame'
import DownloadButton from './ViewComponents/DownloadButton';
import LikeDislikeButton from './ViewComponents/LikeDislikeButton'
import CommentsView from './CommentsView'

function UserProfileView({ userData, username }) {
    const userId = userData !== null ? userData.uid : ""
    const userName = userData !== null ? userData.displayName : ""
    const [search, setSearch] = useState("")
    const [bgColor, setBgColor] = useState("bg-slate-100")
    const [textColor, setTextColor] = useState("text-slate-800");
    const quotes = useSelector(state => state)
    const ref = useRef([])
    ref.current = quotes.map((element, i) => ref.current[i] ?? createRef());

    return (
        <div>
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-700 to-violet-800 text-center text-2xl mt-28">
                More Blogs
            </h2>
            <div className="my-5 grid place-content-center">
                <input type="text" className="py-1 px-3 border-b-2 rounded border-slate-700 transition-all duration-400 ease-out 
                hover:border-t-2 hover:border-l-2 hover:border-r-2 hover:rounded-md hover:border-l-indigo-400 hover:border-t-pink-400
                hover:border-r-purple-400 hover:border-b-indigo-500
                focus:outline-none" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="🗯 Search" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-6 mx-10">
                {
                    quotes && userId !== null && quotes?.filter(function Search(task) {
                        if (search === "") {
                            return task
                        }
                        else {
                            return task._document.data.value.mapValue.fields.Title.stringValue.includes(search.toUpperCase());
                        }
                    }).map((data, i) => (
                        <div key={data._document.data.value.mapValue.fields.uniqueId.stringValue} className="my-10">
                            <div className="p-4 w-full text-center bg-stone-700 rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">

                                <QuoteFrame reference={ref.current[i]} bgColor={bgColor} textColor={textColor}
                                    Title={data._document.data.value.mapValue.fields.Title.stringValue}
                                    Description={data._document.data.value.mapValue.fields.Description.stringValue}
                                    Date={data._document.data.value.mapValue.fields.date.stringValue}
                                    Name={data._document.data.value.mapValue.fields.Name.stringValue} />

                                <BackgroundChangerFrame setBgColor={setBgColor} setTextColor={setTextColor} />

                                <LikeAndDownloadsNumberFrame likesNumber={data._document.data.value.mapValue.fields.likes.integerValue}
                                    downloadsNumber={data._document.data.value.mapValue.fields.downloads.integerValue} />

                                <CommentsView uniqueId={data._document.data.value.mapValue.fields.uniqueId.stringValue} username={username}
                                    userId={userId} />
                                <div className="flex space-x-3 justify-center mt-3 mb-5">
                                    <div className="justify-center items-center mt-2 sm:flex sm:space-y-0 sm:space-x-4">
                                        <div className="w-full sm:w-auto bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-200 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-gray-100">
                                            <div className="text-left">
                                                <button><NavLink to={`/home`}>Home</NavLink></button>
                                            </div>
                                        </div>
                                    </div>

                                    <DownloadButton reference={ref.current[i]}
                                        downloadsNumber={data._document.data.value.mapValue.fields.downloads.integerValue}
                                        uniqueId={data._document.data.value.mapValue.fields.uniqueId.stringValue} />
                                </div>

                                <LikeDislikeButton likesUsers={data._document.data.value.mapValue.fields.likesUsers.arrayValue.values}
                                    uniqueId={data._document.data.value.mapValue.fields.uniqueId.stringValue}
                                    likesNumber={data._document.data.value.mapValue.fields.likes.integerValue} userId={userId} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default UserProfileView