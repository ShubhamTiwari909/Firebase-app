import { useState, useRef, createRef } from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import QuoteFrame from './ViewComponents/QuoteFrame'
import BackgroundChangerFrame from './ViewComponents/BackgroundChangerFrame'
import LikeAndDownloadsNumberFrame from './ViewComponents/LikeAndDownloadsNumberFrame';
import DownloadButton from './ViewComponents/DownloadButton';
import CommentsView from './CommentsView';
import LikeDislikeButton from './ViewComponents/LikeDislikeButton'
function DetailsView({ userId, username }) {
    const ref = useRef([])
    const quotes = useSelector(state => state)
    ref.current = quotes.map((element, i) => ref.current[i] ?? createRef());
    const [bgColor, setBgColor] = useState("bg-slate-100")
    const [textColor, setTextColor] = useState("text-slate-800");
    return (
        <div>
            {
                quotes?.map((data, i) => (
                    <div key={data._document.data.value.mapValue.fields.uniqueId.stringValue} className="my-10">
                        <div id={data._document.data.value.mapValue.fields.uniqueId.stringValue}
                            className="p-4 w-full text-center bg-black rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">

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
                            

                            <div className="justify-center items-center mt-2 sm:flex sm:space-y-0 sm:space-x-4">
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


                            <DownloadButton reference={ref.current[i]} 
                            downloadsNumber={data._document.data.value.mapValue.fields.downloads.integerValue}
                            uniqueId={data._document.data.value.mapValue.fields.uniqueId.stringValue} />

                           
                            <LikeDislikeButton likesUsers={data._document.data.value.mapValue.fields.likesUsers.arrayValue.values}
                            uniqueId={data._document.data.value.mapValue.fields.uniqueId.stringValue}
                            likesNumber={data._document.data.value.mapValue.fields.likes.integerValue} userId={userId} />

                        </div>
                    </div>
                ))}
        </div>
    )
}

export default DetailsView