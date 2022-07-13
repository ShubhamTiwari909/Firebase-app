import {
    darkBackground, lightBackground, indigoBackground, blueBackground, violetBackground,
    purpleGradientBackground, blueGradientBackground, greenGradientBackground
} from '../../EventHandler/BackgroundColors'

function BackgroundChangerFrame({setBgColor,setTextColor}) {
    return (
        <div>
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
        </div>
    )
}

export default BackgroundChangerFrame