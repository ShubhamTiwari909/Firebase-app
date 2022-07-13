const darkBackground = (setBgColor, setTextColor) => {
    setBgColor("bg-slate-800");
    setTextColor("text-slate-100")
}
const lightBackground = (setBgColor, setTextColor) => {
    setBgColor("bg-slate-100");
    setTextColor("text-slate-800")
}

const indigoBackground = (setBgColor, setTextColor) => {
    setBgColor("bg-indigo-700");
    setTextColor("text-slate-200")
}
const violetBackground = (setBgColor, setTextColor) => {
    setBgColor("bg-violet-700");
    setTextColor("text-slate-200")
}
const blueBackground = (setBgColor, setTextColor) => {
    setBgColor("bg-blue-600");
    setTextColor("text-slate-100")
}
const purpleGradientBackground = (setBgColor, setTextColor) => {
    setBgColor("bg-gradient-to-r from-indigo-500 to-purple-600");
    setTextColor("text-slate-200")
}
const blueGradientBackground = (setBgColor, setTextColor) => {
    setBgColor("bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900");
    setTextColor("text-slate-200")
}

const greenGradientBackground = (setBgColor, setTextColor) => {
    setBgColor("bg-gradient-to-r from-green-500 to-green-700");
    setTextColor("text-slate-200")
}

module.exports = {
    darkBackground, lightBackground, indigoBackground, blueBackground, violetBackground,
    purpleGradientBackground, blueGradientBackground, greenGradientBackground
}