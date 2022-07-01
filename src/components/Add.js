import { useState } from 'react';
import db from './Firebase';
import { setDoc, doc } from "firebase/firestore";
import { Link,useNavigate } from 'react-router-dom';

const Add = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");
	const navigation = useNavigate()

	const Characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	const uniqueNumber = Math.floor(Math.random() * 99999999999999)
	const uniqueCharacter = Characters[Math.floor(Math.random() * 25)]
	const uniqueId = uniqueCharacter + uniqueNumber

	const saveData = async (e) => {
		e.preventDefault();
		try {
			// Add data to the store
			const docRef = doc(db, "data", uniqueId)
			await setDoc(docRef, {
				Title: title,
				Description: description,
				date: date,
				uniqueId: uniqueId
			});

			navigation('/')
			window.location.reload();
		}
		catch (err) {
			console.log(err);
		}
	}


	return (
		<div>
			<center className="my-10">
				<h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center text-2xl my-5">Add a Task</h2>
				<form className="w-full max-w-sm" onSubmit={(event) => { saveData(event) }}>
					<div className="md:flex md:items-center mb-6">
						<div className="md:w-1/3">
							<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
								Task
							</label>
						</div>
						<div className="md:w-2/3">
							<input className="bg-gray-200  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text"
								value={title} onChange={(e) => setTitle(e.target.value)} />
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
								value={description} onChange={(e) => setDescription(e.target.value)} />
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
								value={date} onChange={(e) => setDate(e.target.value)} />
						</div>
					</div>

					<div className="md:flex md:items-center">
						<div className="md:w-1/3"></div>
						<div className="md:w-1/3">
							<button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
								type="submit">
								Add
							</button>
						</div>
						<div className="md:w-1/3">
							<button onClick={() => window.location.reload()} className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
								<Link to='/'>Cancel</Link>
							</button>
						</div>
					</div>
				</form>
			</center>

		</div>
	);
}

export default Add