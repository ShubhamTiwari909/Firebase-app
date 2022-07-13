import React from 'react'

function SelectGroup({labelName,value,onChange}) {
    return (
        <div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                        {labelName}
                    </label>
                </div>
                <div className="md:w-2/3">
                    <select className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        value={value} onChange={onChange} required>
                        <option value="Alone" >Alone</option>
                        <option value="Attitude" >Attitude</option>
                        <option value="Friendship" >Friendship</option>
                        <option value="Happiness" >Happiness</option>
                        <option value="Inspiratational" >Inspiratational</option>
                        <option value="Leadership" >Leadership</option>
                        <option value="Life" >Life</option>
                        <option value="Love" >Love</option>
                        <option value="Men" >Men</option>
                        <option value="Motivational" >Motivational</option>
                        <option value="Positive" >Positive</option>
                        <option value="Reading" >Reading</option>
                        <option value="Strength" >Strength</option>
                        <option value="Success" >Success</option>
                        <option value="Time" >Time</option>
                        <option value="Wisdom" >Wisdom</option>
                        <option value="Women" >Women</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SelectGroup