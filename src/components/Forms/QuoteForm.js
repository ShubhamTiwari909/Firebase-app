import React from 'react'
import { Link } from 'react-router-dom';

function AddForm({title,name,description,quoteCategory,date,setTitle,setName,setDescription,setQuoteCategory,setDate,onSubmit}) {
    return (

        <div className="grid place-content-center">
            <div className="my-10">
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center text-2xl my-5">Add a Quote</h2>
                <form className="w-full max-w-sm" onSubmit={onSubmit}>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Title
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"
                                value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                                Written By
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"
                                value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                Description
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <textarea className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                value={description} onChange={(e) => setDescription(e.target.value)} required />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                Category
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <select className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                value={quoteCategory} onChange={(e) => setQuoteCategory(e.target.value)} required>
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
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
                                Date
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input type="date"
                                className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password"
                                value={date} onChange={(e) => setDate(e.target.value)} required />
                        </div>
                    </div>

                    <div className="flex justify-center items-center space-x-3">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-1/3">
                            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                type="submit">
                                Add
                            </button>
                        </div>
                        <div className="md:w-1/3">
                            <button className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                                <Link to='/home'>Cancel</Link>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AddForm