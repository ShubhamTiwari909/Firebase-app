import db from './Firebase';
import { updateDoc, doc } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux'

const Update = () => {
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");
	const objectId = useParams();
	const navigation = useNavigate()
	const quotes = useSelector(state => state)
	// console.log(quotes._document.data.value.mapValue.fields.uniqueId.stringValue)

	const updateId = quotes.filter(item => item._document.data.value.mapValue.fields.uniqueId.stringValue === objectId.id)

	useEffect(() => {
		if (updateId) {
			setName(updateId[0]._document.data.value.mapValue.fields.Name.stringValue)
			setTitle(updateId[0]._document.data.value.mapValue.fields.Title.stringValue)
			setDescription(updateId[0]._document.data.value.mapValue.fields.Description.stringValue)
			setDate(updateId[0]._document.data.value.mapValue.fields.date.stringValue)
		}
	}, [])


	const updateData = async (e) => {
		e.preventDefault()
		try {
			const userRef = doc(db, "data", objectId.id);
			await updateDoc(userRef, {
				Name: name,
				Title: title.toUpperCase(),
				Description: description,
				date: date,
			});
			toast.success("Task Updated successfully", { theme: "dark" })
			navigation('/profile')
		}
		catch (err) {
			console.log(err);
		}
	}


	return (
		<div>
			<div className="grid place-content-center">
				<h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center text-2xl my-5">Update a Quote</h2>
				<form className="w-full max-w-sm" onSubmit={(event) => { updateData(event) }}>
					<div className="flex flex-col items-center md:flex-row mb-6">
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
					<div className="flex flex-col items-center md:flex-row mb-6">
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
					<div className="flex justify-center items-center flex-col md:flex-row space-x-3">
						<div className="md:w-1/3">
							<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
								Date
							</label>
						</div>
						<div className="w-full md:w-2/3">
							<input type="date"
								className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password"
								value={date} onChange={(e) => setDate(e.target.value)} required />
						</div>
					</div>

					<div className="flex justify-center items-center space-x-3 my-6">
						<div className="md:w-1/3"></div>
						<div className="md:w-1/3">
							<button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
								type="submit">
								Submit
							</button>
						</div>
						<div className="md:w-1/3">
							<button className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
								<Link to='/profile'>Cancel</Link>
							</button>
						</div>
					</div>
				</form>
			</div>

		</div>
	);
}

export default Update