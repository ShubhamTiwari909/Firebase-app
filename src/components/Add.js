import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteForm from './Forms/QuoteForm';
import SaveData from './EventHandler/AddEvent'

const Add = ({ userData }) => {
	const userId = userData.uid;
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [quoteCategory, setQuoteCategory] = useState("Happiness")
	const [date, setDate] = useState("");
	const navigation = useNavigate()

	const Characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	const uniqueNumber = Math.floor(Math.random() * 99999999999999)
	const uniqueCharacter = Characters[Math.floor(Math.random() * 25)]
	const uniqueId = uniqueCharacter + uniqueNumber

	const likes = 0
	const likesUsers = ["13131113"]
	const downloads = 0

	return (
	<div>
		<QuoteForm name={name} title={title} description={description} quoteCategory={quoteCategory} date={date} 
		setName={setName} setTitle={setTitle} setDescription={setDescription} setQuoteCategory={setQuoteCategory} setDate={setDate}
		onSubmit={(event) => {  SaveData(event,uniqueId,userId,name,title,description,quoteCategory,date,navigation,likes,likesUsers,downloads)  }}/>
	</div>
	);
}

export default Add