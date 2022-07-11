import { useState,useRef, createRef } from 'react';
import {
    darkBackground, lightBackground, indigoBackground, blueBackground, violetBackground,
    purpleGradientBackground, blueGradientBackground, greenGradientBackground
} from '../BackgroundColors'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import onButtonClick from '../EventHandler/DownloadImage';
import { AiTwotoneDislike, AiFillLike } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import likesCount from '../EventHandler/Like'
import dislikesCount from '../EventHandler/Dislike'
import CommentsView from './CommentsView';

function DetailsView({ userId,username }) {
    const ref = useRef([])
    const quotes = useSelector(state => state)
    ref.current = quotes.map((element, i) => ref.current[i] ?? createRef());
    const [bgColor, setBgColor] = useState("bg-slate-100")
    const [textColor, setTextColor] = useState("text-slate-800");
    return (
        <div>
            {
                quotes?.map((data,i) => (
                    <div key={data._document.data.value.mapValue.fields.uniqueId.stringValue} className="my-10">
                        <div id={data._document.data.value.mapValue.fields.uniqueId.stringValue}
                            className="p-4 w-full text-center bg-black rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div ref={ref.current[i]}
                                className={`p-4 w-full text-center ${bgColor} rounded-lg border shadow-md sm:p-8`}>
                                <h5 className={`mb-2 text-3xl font-bold ${textColor}`}>{data._document.data.value.mapValue.fields.Title.stringValue}</h5>
                                <p className={`mb-3 text-base ${textColor} sm:text-lg break-words`}>{data._document.data.value.mapValue.fields.Description.stringValue}</p>
                                <p className={`mb-2 ${textColor} text-sm `}>{data._document.data.value.mapValue.fields.date.stringValue}</p>
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
                            <div className="flex justify-between mx-3">
                                <div className="flex space-x-2 md:space-x-3">
                                    <FcLike size="1.5rem" />
                                    <p className="text-slate-200">{data._document.data.value.mapValue.fields.likes.integerValue}</p>
                                </div>
                                <div className="flex space-x-2 md:space-x-3">
                                    <AiOutlineCloudDownload size="1.5rem" color="white" />
                                    <p className="text-slate-200">{data._document.data.value.mapValue.fields.downloads.integerValue}</p>
                                </div>
                            </div>
                            <div className="">
                                <CommentsView uniqueId={data._document.data.value.mapValue.fields.uniqueId.stringValue} username={username} />
                            </div>
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
                            <div className="justify-center items-center sm:flex sm:space-y-0 sm:space-x-4 my-3">
                                <div className="w-full mb-4 sm:w-auto bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-200 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-gray-100">
                                    <div className="text-left">
                                        <button
                                            onClick={() => {
                                                setTimeout(() => {
                                                    window.location.reload();
                                                }, 1200);
                                                onButtonClick(ref.current[i], data._document.data.value.mapValue.fields.downloads.integerValue,
                                                    data._document.data.value.mapValue.fields.uniqueId.stringValue)
                                            }}>
                                            Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-x-5 justify-content-center">
                                <div className="w-full mb-4 sm:w-auto inline-flex items-center justify-center">
                                    <div className="text-left">
                                        <button onClick={(event) => {
                                            setTimeout(() => {
                                                window.location.reload();
                                            }, 1200);
                                            likesCount(event, data._document.data.value.mapValue.fields.likesUsers.arrayValue.values,
                                                data._document.data.value.mapValue.fields.uniqueId.stringValue,
                                                data._document.data.value.mapValue.fields.likes.integerValue, userId)
                                        }} className="ring-1 ring-cyan-400 p-1 rounded-lg">
                                            <AiFillLike color="cyan" size="1.7rem" />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full mb-4 sm:w-auto inline-flex items-center justify-center">
                                    <div className="text-left">
                                        <button onClick={(event) => {
                                            dislikesCount(event, data._document.data.value.mapValue.fields.likesUsers.arrayValue.values,
                                                data._document.data.value.mapValue.fields.uniqueId.stringValue,
                                                data._document.data.value.mapValue.fields.likes.integerValue, userId)
                                            setTimeout(() => {
                                                window.location.reload();
                                            }, 1200);

                                        }} className="ring-1 ring-red-400 p-1 rounded-lg">
                                            <AiTwotoneDislike color="crimson" size="1.7rem" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default DetailsView